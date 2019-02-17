const bcrypt = require('bcrypt');

async function getHash (saltRounds,pswd) {
  const hash = await bcrypt.hash(pswd, saltRounds);
  if (!hash) { 
    return false;
  } 
  return hash;
}
function compareSync (pswd, userPswd) {
  return result = bcrypt.compareSync(pswd, userPswd);
}
function send (status, code = {}) {
  return { status, code };
}
async function sendResponse (req, res, r) {
  const status = r.status || 200;
  const code = (typeof r.code === 'string') ? { code: r.code } : r.code;
  return res.status(status).json(code)
}
function catchError (res, err) {
  // console.log('[CATCH_ERROR]', err);
  // return excptHandler.excptHandler(res, JSON.parse(err.message))
}
module.exports = {
  getHash,
  compareSync,
  send,
  sendResponse,
  catchError
}