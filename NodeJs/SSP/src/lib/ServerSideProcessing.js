const db = require('../lib/db');


class ServerSideProcessing{

    constructor(){
        this._connction = db.getPool();
    }


    queryBuilder  (req, table, condition){

        return new Promise( async (reject, resolve)=>{

            let  _connction = db.getPool();
            let columns =  await this.getColumnName(req.columns);
            let conditions = await this.filterBuilder(req, condition);
            let order = await this.orderBuilder(req);
            let limit = await this.pagingBuilder(req);
            let sql = "SELECT SQL_CALC_FOUND_ROWS " +columns.join(',')+ " FROM " +table+" "+conditions+" "+order+" "+limit +"";
            let sqlCountRow = "SELECT COUNT(*) AS found FROM " +table+" "+conditions;
            let sqlTotalRow = "SELECT COUNT(*) AS total FROM " +table;

            let recordsFound = 0;
            let recordsTotal = 0;

            _connction.query(sqlCountRow, function(err, countRow){
                recordsFound = countRow[0]['found'];
            });

            _connction.query(sqlTotalRow, function(err, totalRow){
                recordsTotal = totalRow[0]['total'];
            });


            _connction.query(sql, function(err, res){
                if(err){
                    reject(err)
                }

                let aRow = res;
                let row = [];
                let output = {
                    "draw":req['draw'],
                    "recordsTotal":recordsTotal,
                    "recordsFiltered":recordsFound,
                    "data": []
                };
                for(let i in aRow)
                {

                    let temp = [];
                    for(let data in aRow[i])
                    {

                        if(!aRow[i].hasOwnProperty(data)) continue;
                        temp.push(aRow[i][data]);
                    }
                    output.data.push(temp);

                }
                resolve(output);

            })
        }).catch((e)=>{
            return e;
        })

    };

    pagingBuilder (req){
        let limit = "";
        if(req['start'] && req['length'] !== -1)
        {
            limit = 'LIMIT ' +req['start']+ ', ' +req['length']
        }
        return limit;
    };

    orderBuilder(req){

        let order = "";
        if(Object.keys(req.order).length > 0){
            order = `ORDER BY ${req.columns[req.order[0].column].name} ${req.order[0].dir}`;
        }
               return order;
    }

    filterBuilder (req, condition){
        let filters = "";
        if(req.search.value && req.search.value !== ''){
            filters = `WHERE (`;
            let columns = req.columns;
            columns.map((d)=>{
                filters += `${d.name} LIKE '%${req.search.value}%' OR `;
            });
            filters = filters.substring(0, filters.length -4);
            filters += ')';
        }

        if(condition && Object.keys(condition).length > 0){
            if(filters === '') {
                filters = `WHERE (`;
            }else{
                filters = "AND (";
            }

            for(let data in condition)
             if(condition.hasOwnProperty(data)){
                filters += `${data} LIKE '%${condition[data]}%' AND `;
             }
            filters = filters.substring(0, filters.length -4);
            filters += ')';
        }
        return filters;
    }

    getColumnName (column){
        let columns = [];
        column.map((d, i)=>{
            columns.push(d.name);
        });
        return columns;
    }


}


module.exports = ServerSideProcessing;