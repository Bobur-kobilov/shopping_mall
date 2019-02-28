const walletConfig = require('../configs/walletConfig.json');
const BitGoJS = require('bitgo');

async function createAddr(coinCode) {
  const bitgo = new BitGoJS.BitGo({ env: 'production' });
  const Promise = require('bluebird');
  
  // TODO: set your access token here
  const accessToken = walletConfig.production.AccessToken;
  
  // TODO: set a label for your new wallet here
  const label = 'Example Test Wallet';
  
  // TODO: set your passphrase for your new wallet here
  const passphrase = '12345678';
  
  const coin = 'btc';
  
  // Create the wallet
  return Promise.coroutine(function *() {
    bitgo.authenticateWithAccessToken( {accessToken} );
  
    const walletOptions = {
      label,
      passphrase
    };
  
    const wallet = yield bitgo.coin(coin).wallets().generateWallet(walletOptions);
  
    const walletInstance = wallet.wallet;
    const walletAddress = walletInstance.receiveAddress();
    console.log(`Wallet ID: ${walletInstance.id()}`);
    console.log(`Receive address: ${walletInstance.receiveAddress()}`);
  
    console.log('BACK THIS UP: ');
    console.log(`User keychain encrypted xPrv: ${wallet.userKeychain.encryptedPrv}`);
    console.log(`Backup keychain xPrv: ${wallet.backupKeychain.prv}`);
    let data = {
      coinAddress:walletAddress
    }
    return {walletAddress}
  })();
}
// createAddr();
module.exports = {
  createAddr
}