var express = require('express');
var router = express.Router();
var DBController = require("../controller/DBController");
var HTMLController = require("../controller/HTMLController")
var dbController = new DBController();
var htmlController = new HTMLController();

/* GET home page. */
router.get("/:id", function(req, res,next) {
  if(req.params.id.match(/^\d+$/)){
    var blogId = Number(req.params.id);
    dbController.SelectBlogs(blogId,(blog)=>{
      console.log(blog);
      htmlController.AllParse(blog[0].text,(blogText)=>{
        if(blog.length == 0){
          res.render('pages/notfound');
        }else{
          res.render('pages/blogs',{title:blog[0].title,blogText:blogText});
        }
      })
    })
  }else{
    next();
  }
});

module.exports = router;
