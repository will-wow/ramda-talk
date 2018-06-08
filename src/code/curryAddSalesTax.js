// Lodash
function addSalesTax(price) {
  return price * 1.1025;
}

addSalesTax(20); // 22.05

// Ramda
const addSalesTax = R.multiply(1.1025);

addSalesTax(20); // 22.05