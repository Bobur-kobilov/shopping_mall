'use strict';

const mysql2 = require('mysql2');
const dbJSON = require('./dbConfigs.json');
const poolInfo = dbJSON.pool;
const connOptions = dbJSON.connOptions;
const dbInfoMaster = dbJSON.development.write;
const dbInfoSlave = dbJSON.development.read;
let poolMaster = undefined, poolSlave = undefined;

if (poolMaster === undefined) {
  createPool();
}
if (poolSlave === undefined) {
  createPoolSlave();
}

function createPool () {
  return new Promise(async(resolve,reject)=>{
    try {
      poolMaster = mysql2.createPool(Object.assign(dbInfoMaster,poolInfo,connOptions));
      resolve({});
    } catch(error) {
      console.error(error);
      reject(error);
    }
  });
}
function createPoolSlave () {
  return new Promise(async(resolve,reject)=>{
    try {
      poolSlave =mysql2.createPool(Object.assign(dbInfoSlave,poolInfo,connOptions));
      resolve({});
    } catch(error) {
      console.error(error);
      reject(error);
    }
  });
}

module.exports.getConnectionMaster = () => {
  return new Promise(async(resolve,reject) =>{
    if(poolMaster ===undefined) {
      createPool();
    } else {
      poolMaster.getConnection((error,conn)=>{
        if(error) {
          console.error(error);
          reject(error);
        } else {
          console.log("DB CONNECTED SUCCESSFULLY");
          resolve(conn);
        }
      });
    }
  })
};

module.exports.beginTransaction = (connection) => {
  return new Promise(async(resolve,reject)=>{
    connection.beginTransaction(function(error){
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve({});
      }
    });
  });
}
module.exports.queryPromise = (connection,sql,params) => {
  return new Promise(async(resolve,reject)=>{
    var query = connection.query(sql, params,(error,result)=>{
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
    console.log(query.sql);
  });
};
module.exports.executePromise = (connection, sql, params) => {
  return new Promise(async(resolve, reject) => {
    const pps = connection.execute(sql, params, (error, result) => {
      if(error){
        reject(error);
      } else {
        resolve(result)
      }
    });
    console.log(pps.sql);
    console.log(pps.values);
  })
}

module.exports.commit = (conn) => {
  conn.commit((error) => {
    if(error) {
      conn.rollback();
      conn.release();
    }
  })
}

module.exports.rollback = (conn) => {
  conn.rollback((error) => {
    if(error) {
      conn.release();
    }
  })
}

module.exports.release = (conn) => {
  if(conn){
    conn.release();
  }
}

poolMaster.on('error', function (error) {
  console.log(error);
  if(error.code === '') {
    createPool();
  }
});

poolMaster.on('release', function (conn) {
  console.log({message: 'Connection released to Master', threadId: conn.threadId});
});

poolSlave.on('release', function (conn) {
  console.log({message: 'Connection released to Slave', threadId: conn.threadId});
});