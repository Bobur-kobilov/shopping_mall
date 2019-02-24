function selInfo () {
  return `
  SELECT 
    product_id as productId
    ,product_desc as productDesc
    ,picture as productImage
    ,picture4x4_01 as productImage4x4_01
    ,product_name as productName
    ,price as productPrice
  FROM products
  `
}
module.exports = {
  selInfo
}