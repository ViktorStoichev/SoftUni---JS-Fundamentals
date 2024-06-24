function orders(type, quantity) {
  //   •	coffee - 1.50
  // •	water - 1.00
  // •	coke - 1.40
  // •	snacks - 2.00

  let price = 0;
  switch (type) {
    case "coffee":
      price = 1.50 * quantity;
      break;
    case "water":
      price = 1.00 * quantity;
      break;
    case "coke":
      price = 1.40 * quantity;
      break;
    case "snacks":
      price = 2.00 * quantity;
      break;
  }

  console.log(price.toFixed(2));
}

orders("water", 5)
