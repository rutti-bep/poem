var express = require('express');
var router = express.Router();
var DBController = require("../controller/DBController");
var dbcontroller = new DBController();

/* GET home page. */
router.get('/', function(req, res, next) {
  dbcontroller.SelectBlogLists(10,(blogLists)=>{
    console.log(blogLists);
    res.render('pages/index', { title: 'rutti-poem',blogLists:blogLists});
  })
});

module.exports = router;
