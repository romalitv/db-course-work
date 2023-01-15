'use strict';

const mysql = require('mysql2');

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "18IsaIa*98p",
    database: "mydb",
};

const sql_pool = mysql.createConnection(connectionOptions);

module.exports = sql_pool;