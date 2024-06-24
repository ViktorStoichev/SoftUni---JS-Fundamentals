function storeProvision(currStock, orderedStock) {
  let totalStockList = [];

  for (let index = 0; index < currStock.length; index += 2) {
    let currProduct = currStock[index];
    let currQuantity = Number(currStock[index + 1]);

    let stockObj = {product: currProduct, quantity: currQuantity};
    totalStockList.push(stockObj);
  }

  for (let index = 0; index < orderedStock.length; index += 2) {
    let currProduct = orderedStock[index];
    let currQuantity = Number(orderedStock[index + 1]);

    let productFound = totalStockList.find(p => p.product === currProduct);

    if (productFound) {
      productFound.quantity += currQuantity;
    }else {
      let stockObj = {product: currProduct, quantity: currQuantity};
      totalStockList.push(stockObj);
    }
  }

  for (let obj of totalStockList) {
    console.log(`${obj.product} -> ${obj.quantity}`);
  }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])