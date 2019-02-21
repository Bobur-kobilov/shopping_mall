var express = require('express');
var router = express.Router();
const users = require('../service/users.js');
const {
  sendResponse,
  catchError
} = require('../middle/util.js');

router.post('/signup',function(req,res,next){
  users.signup(req.body)
    .then((r)=> res.status(r.status).send(r.code))
    .catch(err => catchError(res,err))

});
router.post('/login',function(req,res){
  users.login(req.body)
    .then((r) => res.status(r.status).send(r.code))
    .catch(err => catchError(res, err));
  
})
module.exports = router;
