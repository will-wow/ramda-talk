const addSalesTaxForTen = R.pipe(R.multiply(10), addSalesTax);

addSalesTaxForTen(2.27); // 25.02675