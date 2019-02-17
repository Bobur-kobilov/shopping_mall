var express = require('express');
var router = express.Router();
const users = require('../service/users.js');
const {
  sendResponse,
  catchError
} = require('../middle/util.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',function(req,res,next){
  users.signup(req.body);
  res.status('200').send('Success');
});
router.post('/login',function(req,res){
  users.login(req.body)
  .then((r) => res.status(r.status).send(r.code))
  .catch(err => catchError(res, err));
  
})
module.exports = router;
