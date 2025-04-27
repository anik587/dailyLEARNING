'use strict';

const express = require('express');
let router = express.Router();
let app = express();
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



//middleware
router.use((req,res,next)=>{
    next();
});

//controller
let dataTable = require('./Datatable/index');

app.use(cors(corsOptions));
//base route
app.use('/api', router);

//route
router.use('/datatable', dataTable);

//global error handler
app.use(function(err, req, res, next) {
    if (err) {
        console.log(`error occurred ${err}`);
    }
});


module.exports = app;