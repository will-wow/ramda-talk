function addSalesTaxForTen(prices) {
  return addSalesTax(_.multiply(10, prices));
}

addSalesTaxForTen(2); // 22.05