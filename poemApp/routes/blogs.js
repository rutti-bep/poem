var express = require('express');
var router = express.Router();
var DBController = require("../controller/DBController");
var dbcontroller = new DBController();

/* GET home page. */
router.get("/:id", function(req, res) {
  if(req.params.id.match(/^\d+$/)){
    var blogId = Number(req.params.id);
    dbcontroller.SelectBlogs(blogId,(blog)=>{
      console.log(blog);
      if(blog.length == 0){
        res.render('pages/notfound');
      }else{
        res.render('pages/blogs',{title:blog[0].title,blog:blog[0]});
      }
    })
  }
});

module.exports = router;
