'use strict';
let mysql = require('mysql');
let dateformat = require('dateformat');

class DBController {
  constructor(){
    this.connection = mysql.createConnection({
      host : 'db',
      user : 'root',
      password : 'password',
      port : 3306,
      database: 'poem'
    });
    this.connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }

      //console.log('connected as id ' + this.connection.threadId);
    });
  }

  CreateBlogs(title,text,callback){
    let nowTime = dateformat(new Date(), 'yyyy-mm-dd hh:mm:ss');
    console.log(nowTime)
    this.connection.query("INSERT into blogs set ?;",{title:"title",text:"てすとー",created_at:nowTime},(err, rows, fields)=>{
      if (err) throw err;

      console.log('The solution is: ', rows);
      callback(rows); 
    })
  }

  SelectBlogs(id,callback){
    this.connection.query('SELECT * from blogs WHERE id=?;',[id], (err, rows, fields) => {
      if (err) throw err;

      console.log('The solution is: ', rows);
      callback(rows); 
    });
  }
}

module.exports = DBController;
