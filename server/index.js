const express = require('express');
const app = express();
const router = require('./router.js');
const morgan = require('morgan');


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);