const addSalesTaxForTen = R.compose(addSalesTax, R.multiply(10));

addSalesTaxForTen(2); // 22.05