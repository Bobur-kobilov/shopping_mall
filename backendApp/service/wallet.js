const walletApi = require('../library/api/wallet.js');
const util = require('../middle/util.js');
const walletQuery = require('../sql/wallet.js');
const Mysql = require('../configs/MySql.js');

async function createAddr(req) {
  let conn;
  const payload = req.body;
  try {
    const result = await walletApi.createAddr(req.body.coinCode);
    payload.coinAddr = result.result.walletAddress;
    conn = await Mysql.getConnectionMaster();
    await Mysql.beginTransaction(conn);
    const sql = walletQuery.insertAddr(payload);
    let response = await Mysql.queryPromise(conn,sql);
    console.log(response);
    if (response.affectedRows === 1) {
      await Mysql.commit(conn);
      await Mysql.release(conn);
      return util.send(200,result);
    } else {
      Mysql.release(conn);
      return util.send(543,"Error occured");
    }
    
  } catch(error) {
    Mysql.release(conn);
    console.error(error);
    return util.send(543,error);
  }
}
async function getWalletInfo(req) {
  // const conn;
  const payload = req.query;
  console.log(payload)
  try {
    conn = await Mysql.getConnectionMaster();
    await Mysql.beginTransaction(conn);
    const sql = walletQuery.selWalletAddr(payload);
    let response = await Mysql.queryPromise(conn,sql);
    console.log(response);
    Mysql.release(conn);
    return util.send(200,response);
  } catch(error) {
    Mysql.release(conn);
    console.log(error);
    return util.send(543,error);
  }
}
module.exports = {
  createAddr,
  getWalletInfo
}
