const MySql = require('../configs/MySql.js');
const productQuery = require('../sql/productQuery');
const util = require('../middle/util.js');
async function getInfo(params) {
  console.log("INSIIIDEEEE");
  let conn;
  try {
    conn = await MySql.getConnectionMaster();
    await MySql.beginTransaction(conn);
    let sql = productQuery.selInfo();
    let response = await MySql.queryPromise(conn,sql);
    return util.send(200,response);
  } catch(error){
    console.error(error);
    return util.send(543,error);
  }
}
module.exports = {
  getInfo
}