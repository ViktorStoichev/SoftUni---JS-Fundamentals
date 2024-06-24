function softUniBarIncome(array) {
  // let pattern = /%(?<customer>[A-Za-z]+)%<(?<product>\w+)>\|(?<count>[0-9]+)\|(?<price>[0-9.]+)\$/;
  let patternName = /%(?<customer>[A-Z][a-z]+)%/;
  let patternProduct = /<(?<product>\w+)>/;
  let patternCount = /\|(?<count>[0-9]+)\|/;
  let patternPrice = /(?<price>[0-9.]+)\$/;
  let totalIncome = 0;

  for (let el of array) {
    if (el === "end of shift") {
      break;
    }

    let name = el.match(patternName);
    let product = el.match(patternProduct);
    let count = el.match(patternCount);
    let price = el.match(patternPrice);

    if (name && product && count && price !== null) {
      let totalPrice = Number(count[1]) * Number(price[1]);
      console.log(`${name[1]}: ${product[1]} - ${totalPrice.toFixed(2)}`);
      totalIncome += totalPrice;
    }
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])