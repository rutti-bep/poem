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
  console.log(title);
  console.log(text)
  dbcontroller.InsertBlogs(title,text,(rows)=>{
    console.log(rows);
    res.send('POST is sended.'+rows);
  })
})

module.exports = router;
