const bcrypt = require('bcrypt');

async function getHash (saltRounds,pswd) {
  const hash = await bcrypt.hash(pswd, saltRounds);
  if (!hash) {
    return false;
  } 
  return hash;
}
module.exports = {
  getHash
}