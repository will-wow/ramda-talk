// Lodash
function addSalesTaxToAll(prices) {
  return _.map(prices, addSalesTax);
}

addSalesTaxToAll([20, 40]) // [22.05, 44.10];

// Ramda
const addSalesTaxToAll = R.map(addSalesTax);

addSalesTaxToAll([20, 40]) // [22.05, 44.10];