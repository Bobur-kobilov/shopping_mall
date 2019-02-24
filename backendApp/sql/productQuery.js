function selInfo () {
  return `
  SELECT 
    product_id as productId,
    picture as productImage,
    product_name as productName,
    price as productPrice
  FROM products
  `
}
module.exports = {
  selInfo
}