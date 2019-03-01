const express = require('express');
const router = express.Router();
const WalletService  = require('../service/wallet');
const {
  sendResponse,
  catchError
} = require('../middle/util.js');

router.post('/createAddr',function(req,res){
  console.log("ROUTER");
    WalletService.createAddr(req)
    .then((r) => res.status(r.status).send(r.code))
    .catch(err => catchError(res, err));
  });
router.get('/getWalletInfo',function(req,res){
  WalletService.getWalletInfo(req)
    .then((r)=>res.status(r.status).send(r.code))
    .catch(err =>catchError(res,err));
})
  module.exports = router;