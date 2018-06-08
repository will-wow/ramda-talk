const addSalesTaxForTen = R.pipe(
  R.multiply(10),
  addSalesTax,
  roundToCents
);

addSalesTaxForTen(2.27); // 25.03