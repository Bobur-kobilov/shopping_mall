const express = require('express');
const router = express.Router();
const products = require('../service/products.js');
const {
  sendResponse,
  catchError
} = require('../middle/util.js');

router.get('/getInfo',function(req,res){
  console.log("ROUTER");
  products.getInfo(req)
    .then((r)=>res.status(r.status).send(r.code))
    .catch(err=> catchError(res,err));
    console.log("ROUTER OUTSIDE");
})
module.exports = router;