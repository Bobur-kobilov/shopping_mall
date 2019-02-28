const axios = require('axios');

async function createAddr(coinCode) {
  console.log("INSIDE API")
  const payload = {
    coinCode:coinCode
  };
  let result;
  try {
    result = await axios.post('http://ec2-54-174-147-245.compute-1.amazonaws.com:2324/wallet/createAddr');
    const data = {
      result: result.data
    }
    return data;
  } catch(error) {
    console.error(error);
    return error;
  }
}  
module.exports = {
  createAddr
}