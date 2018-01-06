'use strict';

let mysql = require('mysql');
let connection = mysql.createConnection({
  host : 'db',
  user : 'root',
  password : 'password',
  port : 3306,
  database: 'test_mysql'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


function SELECT(callback){
  connection.query('SELECT * from users LIMIT 10;', (err, rows, fields) => {
    if (err) throw err;

    console.log('The solution is: ', rows);
    callback(rows); 
  });
}

module.exports = SELECT;
