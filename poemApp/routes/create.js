var express = require('express');
var router = express.Router();
var DBController = require("../controller/DBController");
var dbcontroller = new DBController();

/* GET home page. */
router.get('/blog', function(req, res, next) {
  res.render('pages/createBlog');
});

router.post('/blog',(req, res)=>{
  var title = req.body.title;
  var text = req.body.text;
  dbcontroller.InsertBlogs(title,text,(rows)=>{
    console.log(rows);
    res.redirect('/blogs/'+rows.insertId);
  })
})

module.exports = router;
