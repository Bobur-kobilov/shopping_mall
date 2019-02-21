function selInfo () {
  return `
  SELECT 
    picture as productImage,
    product_name as productName,
    price as productPrice
  FROM products
  `
}
module.exports = {
  selInfo
}