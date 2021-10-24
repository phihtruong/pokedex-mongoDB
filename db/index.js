const mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: 'pt',
  database: 'pokedex'
});

connection.connect();

module.exports = connection;