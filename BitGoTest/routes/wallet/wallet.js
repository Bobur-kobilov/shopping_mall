const express = require('express');
const router = express.Router();
const walletApi = require('../../APIs/wallet.js');
router.post('/createAddr',function(req,res){
  walletApi.createAddr(req)
    .then((r)=>res.status(200).send(r))
    .catch((err)=> res.status(200).send(err));
});

router.get('/getBalance',function(req,res){
  res.status('200').send({});
});

router.post('/sendCoin',function(req,res){
  res.status('200').send({})
});

module.exports = router;