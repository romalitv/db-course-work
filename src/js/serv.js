'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./scraperInstance');
const sql_pool = require('./sql_pool');

const app = express();
const port = 8080;
sql_pool.connect();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/db', router);

app.listen(8080, () => {
    console.log(`Server starts on http://localhost:${port}`);
});