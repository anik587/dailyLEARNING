require('dotenv').config();
let mysql = require('mysql');
let pool;
module.exports = {
    /*
     * Creating A Connection Pool
     *
     * */
    getPool: () => {
        if (pool) {
            console.log("existing  pool");
            return pool;
        }
        pool = mysql.createPool({
            connectionLimit: process.env.DB_POOL_CONN_LIMIT || 1,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
        console.log("New Pool");
        return pool;
    },
};