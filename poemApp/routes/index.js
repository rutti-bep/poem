var express = require('express');
var router = express.Router();
var SELECT = require("../test");

/* GET home page. */
router.get('/', function(req, res, next) {
  SELECT((val)=>{
    console.log(val)
    res.render('index', { title: 'Express' });
  });
});

module.exports = router;
