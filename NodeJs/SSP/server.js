'use strict';

require('dotenv').config();
const http = require('http');

const app = require('./src/app');

const port = process.env.PORT;

const server = http.createServer(app);
server.on('listening',function(){
    console.log(`ok, server is running port= ${port}`);
});
server.listen(port);
console.log(`Server listening on port  ${port}`);
