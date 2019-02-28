const walletApi = require('../library/api/wallet.js');
const util = require('../middle/util.js');
async function createAddr(coinCode) {
  try {
    const result = await walletApi.createAddr(coinCode);
    console.log(result);

    return util.send(200,result);
  } catch(error) {
    console.error(error);
    return util.send(543,error);

  }
}
module.exports = {
  createAddr
}
