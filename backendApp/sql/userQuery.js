function inserUser({username,email,password}) {
  return`
  INSERT INTO user_master
   (
    user_name,
    email,
    password
    )
   VALUES
   (
    '${username}'
    ,'${email}'
    ,'${password}'
  );
  `
};

module.exports = {
  inserUser
}