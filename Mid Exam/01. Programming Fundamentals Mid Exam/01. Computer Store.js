function computerReceipt(parts) {
  let clientType = parts.pop();
  let priceWithoutTaxes = 0;
  let taxes = 0;
  let totalPrice = 0;
  let partsToNumbers = parts.map(Number)

  for (let partPrice of partsToNumbers) {
    if (partPrice < 0) {
      console.log("Invalid price!");
      continue;
    }else {
      priceWithoutTaxes += partPrice;
      totalPrice += partPrice + (partPrice * 0.20);
      taxes += partPrice * 0.20;
    }
  }

  if (clientType === "special") {
    totalPrice -= totalPrice * 0.10;
  }

  if (totalPrice == 0) {
    console.log("Invalid order!");
  }else {
    console.log("Congratulations you've just bought a new computer!");
  console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log("-----------");
  console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  }
}

computerReceipt(['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular'])
  
// computerReceipt([1023 ,15 ,-20 ,-5.50 ,450 ,20 ,17.66 ,19.30 ,"regular"])
// computerReceipt(["regular"])