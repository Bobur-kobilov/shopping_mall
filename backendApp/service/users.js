const Mysql = require('../configs/MySql.js');
const userQuery = require('../sql/userQuery.js');
const util = require('../middle/util.js');
async function signup(payload) {
  let conn;
  try {
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
    console.log("$$$$$$$$");
    console.log(response)
    if(response.affectedRows === 1) {
      await Mysql.commit(conn);
      await Mysql.release(conn);
      return util.send(200,"Success");
    } else {
      await Mysql.release(conn);
      return util.send(543,"Account already resgistered");
    }
    
  } catch(error){
    if (conn) {
      Mysql.rollback(conn);
    }
    console.error(error);
    return util.send(543,"Account already resgistered");
  }
}
async function login(payload) {
  let conn;
  const email = payload.email;
  const password = payload.password;
  console.log(payload.password);
  try {
    conn = await Mysql.getConnectionMaster();
    await Mysql.beginTransaction(conn);
    let sql = userQuery.selUser({email});
    const response = await Mysql.queryPromise(conn,sql);
    if (!response[0]) {
      return util.send(404,'No Account');
    } 
    else if (!util.compareSync(password,response[0].userPassword)) {
      return util.send(543,'Wrong Credentials');
    } else {
      return util.send(200,'Success');
    }
  } catch(error) {
    }
}
module.exports = {
  signup,
  login
}