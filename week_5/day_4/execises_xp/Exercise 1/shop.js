const products = require("./products");

function getProductByName(name) {
  const product = products.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (!product) {
    return `Product with name "${name}" not found.`;
  }

  const formattedProduct = `Product Name: ${product.name}\nPrice: $${product.price.toFixed(2)}\nCategory: ${product.category}`;
  return formattedProduct;
}

console.log(`${getProductByName("Wireless Mouse")}\n`);
console.log(`${getProductByName("Cookbook: Quick Meals")}\n`);
console.log(`${getProductByName("Organic Apples (1kg)")}\n`);
console.log(`${getProductByName("moms recipe book")}\n`); // Testing non-existing product
console.log(`${getProductByName("Running Shoes")}\n`);
