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
      database: 'poem',
      timezone: 'jst',
      charset: 'utf8mb4'
    });
    this.connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }

      //console.log('connected as id ' + this.connection.threadId);
    });
  }

  InsertBlogs(titleValue,textValue,callback){
    let nowTime = dateformat(new Date(), 'yyyy-mm-dd HH:MM:ss');
    console.log(nowTime)
    let values = {"title": titleValue,"text": textValue,"created_at": nowTime}
    console.log(values)
    this.connection.query("INSERT into blogs set ?;",values,(err, rows, fields)=>{
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
  
  SelectBlogLists(size,callback){
    this.connection.query('SELECT id,title,created_at FROM `blogs` ORDER BY `id` DESC LIMIT ?;',[size], (err, rows, fields) => {
      if (err) throw err;

      console.log('The solution is: ', rows);
      callback(rows); 
    });
  }
  
}

module.exports = DBController;
