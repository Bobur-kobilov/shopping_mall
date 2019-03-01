function insertAddr({userId,coinCode,coinBalance,coinAddr}) {
  return `
    INSERT INTO wallet
    (
    user_id
    ,coin_addr
    ,coin_code
    ,coin_balance
    ,createdDate
    )
    VALUES
    (
    '${userId}'
    ,'${coinAddr}'
    ,'${coinCode}'
    ,'${coinBalance}'
    ,NOW()
    )
  `
}
function selWalletAddr({userId,coinCode}) {
  return `
    SELECT 
    coin_id AS coinID
    ,coin_code AS coinCode
    ,coin_name AS coinName
    ,coin_addr AS coinAddress
    ,coin_balance AS coinBalance
    ,createdDate AS date
    FROM wallet
    WHERE user_id = '${userId}' AND coin_code = '${coinCode}'
  `
}
module.exports = {
  insertAddr
  ,selWalletAddr
}