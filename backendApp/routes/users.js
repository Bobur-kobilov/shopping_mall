var express = require('express');
var router = express.Router();
const users = require('../service/users.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',function(req,res,next){
  users.signup(req.body);
  res.status('200').send('Success');
});
module.exports = router;
