const express = require('express');
const app = express();
const router = require('./router.js');
const morgan = require('morgan');


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => { console.log(`Serving Pokedex at: http://127.0.0.1:3000`)});