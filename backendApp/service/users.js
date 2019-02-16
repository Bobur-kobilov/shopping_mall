const Mysql = require('../configs/MySql.js');
const userQuery = require('../sql/userQuery.js');
const util = require('../middle/util.js');
async function signup(payload) {
  let conn;
  try {
    let user_name = payload.user_name;
    let email = payload.email;
    let password = payload.password;
  
    let encryptedPswd = await util.getHash(10,password);
    if (!encryptedPswd) {
      return false;
    }
    
    conn = await Mysql.getConnectionMaster();
    await Mysql.beginTransaction(conn);

    payload.password = encryptedPswd;
    let sql = userQuery.inserUser(payload);
    let response = await Mysql.queryPromise(conn,sql);
    await Mysql.commit(conn);
    await Mysql.release(conn);
  } catch(error){
    if (conn) {
      Mysql.rollback(conn);
    }
    console.error(error);
  }
}
module.exports = {
  signup
}