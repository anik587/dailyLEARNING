function server(res)
{
    //Paging
    var sLimit = "";
    if(request['iDisplayStart'] && request['iDisplayLength'] != -1)
    {
        sLimit = 'LIMIT ' +request['iDisplayStart']+ ', ' +request['iDisplayLength']
    }

    //Ordering
    var sOrder = "";
    if(request['iSortCol_0'])
    {
        sOrder = 'ORDER BY ';

        for(var i = 0 ; i < request['iSortingCols']; i++)
        {
            if(request['bSortable_'+parseInt(request['iSortCol_'+i])] == "true")
            {
                sOrder += aColumns[parseInt(request['iSortCol_'+i])] +" "+ request['sSortDir_'+i] +", ";
            }
        }

        sOrder = sOrder.substring(0, sOrder.length -2)
        if(sOrder == 'ORDER BY')
        {
            console.log("sOrder == ORDER BY");
            sOrder = "";
        }
    }

    //Filtering
    var sWhere = "";
    if(request['sSearch'] && request['sSearch'] != "")
    {
        sWhere = "WHERE (";
        for(var i=0 ; i<aColumns.length; i++)
        {
            sWhere += aColumns[i]+ " LIKE " +"\'%"+request['sSearch']+"%\'"+" OR ";
        }

        sWhere = sWhere.substring(0, sWhere.length -4);
        sWhere += ')';
    }

    //Individual column filtering
    for(var i=0 ; i<aColumns.length; i++)
    {
        if(request['bSearchable_'+i] && request['bSearchable_'+i] == "true" && request['sSearch_'+i] != '')
        {
            if(sWhere == "")
            {
                sWhere = "WHERE ";
            }
            else
            {
                sWhere += " AND ";
            }
            sWhere += " "+aColumns[i]+ " LIKE " +request['sSearch_'+i]+ " ";
        }
    }

    //Queries
    var sQuery = "SELECT SQL_CALC_FOUND_ROWS " +aColumns.join(',')+ " FROM " +sTable+" "+sWhere+" "+sOrder+" "+sLimit +"";

    var rResult = {};
    var rResultFilterTotal = {};
    var aResultFilterTotal = {};
    var iFilteredTotal = {};
    var iTotal = {};
    var rResultTotal = {};
    var aResultTotal = {};

    connection.query(sQuery, function selectCb(err, results, fields){
        if(err){
            console.log(err);
        }

        rResult = results;

        //Data set length after filtering
        sQuery = "SELECT FOUND_ROWS()";

        connection.query(sQuery, function selectCb(err, results, fields){
            if(err){
                console.log(err);
            }
            rResultFilterTotal = results;
            aResultFilterTotal = rResultFilterTotal;
            iFilteredTotal = aResultFilterTotal[0]['FOUND_ROWS()'];

            //Total data set length
            sQuery = "SELECT COUNT("+sIndexColumn+") FROM " +sTable;

            connection.query(sQuery, function selectCb(err, results, fields){
                if(err){
                    console.log(err);
                }
                rResultTotal = results;
                aResultTotal = rResultTotal;
                iTotal = aResultTotal[0]['COUNT(*)'];

                //Output
                var output = {};
                var temp = [];

                output.sEcho = parseInt(request['sEcho']);
                output.iTotalRecords = iTotal;
                output.iTotalDisplayRecords = iFilteredTotal;
                output.aaData = [];

                var aRow = rResult;
                var row = [];

                for(var i in aRow)
                {
                    for(Field in aRow[i])
                    {
                        if(!aRow[i].hasOwnProperty(Field)) continue;
                        temp.push(aRow[i][Field]);
                    }
                    output.aaData.push(temp);
                    temp = [];
                }
                sendJSON(res, 200, output);
            });
        });
    });
}

function getColumnNames()
{
    aColumns = [];
    connection.query('SHOW COLUMNS FROM '+sTable,
        function selectCb(err, results, fields){
            if(err){
                console.log(err);
            }
            for(var i in results)
            {
                aColumns.push(results[i]['Field']);
            }
        });
}

function sendJSON(res, httpCode, body)
{
    var response = JSON.stringify(body);
    res.send(httpCode,response);
}