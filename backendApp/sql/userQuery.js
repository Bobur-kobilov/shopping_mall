function inserUser({username,email,password}) {
  return`
  INSERT INTO user_mast
   (
    user_name,
    email,
    password,
    regist_date
    )
   VALUES
   (
    '${username}'
    ,'${email}'
    ,'${password}'
    ,NOW()
  );
  `
};
function selUser({email}) {
  return `
  SELECT 
  user_name AS userName,
  email AS userEmail,
  password AS userPassword
  FROM user_mast
  WHERE email = '${email}'
  `
}

module.exports = {
  inserUser,
  selUser
}