'use strict'
const datatable = require('express').Router();
const bodyParser = require('body-parser');
const db = require('../lib/db');
const SSP = require('../lib/ServerSideProcessing');
datatable.use(bodyParser.json());
let url = require('url');

datatable.use(function (request, response, next) {
    console.log(request.method);
    next();
});


datatable.route('/generate').get((req, res)=>{


    let datatable = new SSP();
    let conditions = '';
    if(req.query.where !== undefined){
        conditions = JSON.parse(req.query.where);
    }
    datatable.queryBuilder(req.query, 'users', conditions).then(response=> res.json(response));
});


module.exports = datatable;

