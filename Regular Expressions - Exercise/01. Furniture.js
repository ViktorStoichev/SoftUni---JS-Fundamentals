function furnitureList(array) {
  let totalPrice = 0;
  let pattern = />>(?<item>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
  let isValid = null;
  let index = 0;
  let command = array[index];
  
  console.log("Bought furniture:");

  while (command !== "Purchase") {
    isValid = pattern.exec(command);
    if ((isValid !== null)) {
      totalPrice += Number(isValid.groups.price) * Number(isValid.groups.quantity);
      console.log(isValid.groups["item"]);
    }

    index++;
    command = array[index];
  }

  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furnitureList(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])

furnitureList(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])