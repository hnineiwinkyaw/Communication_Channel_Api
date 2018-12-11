var express = require("express");
var mongojs = require("mongojs");
var router = express.Router();

var db = mongojs('mongodb://hninei:tpmHEWK_18@ds121332.mlab.com:21332/hackathon_channel', ['user']);

router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    next();
});

router.get("/users",function(req,res){
  db.user.find(function(err,user){
   // res.header("Access-Control-Allow-Origin", "*");
  //  res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status(200).json(user);
  })
});

/*router.post("/users",function(req,res){
	//console.log(JSON.stringify(req.body));
  db.user.insert(req.body,function(err,result){
    //console.log(JSON.stringify(req));
    //res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status(200).send(result._id);
  });
});*/

module.exports = router;

