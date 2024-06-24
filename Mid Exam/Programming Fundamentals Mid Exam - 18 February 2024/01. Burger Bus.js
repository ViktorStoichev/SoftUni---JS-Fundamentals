function burgerBus(array) {
  let totalCitiesCount = Number(array.shift());
  let totalIncome = 0;
  let citiesCounter = 0;

  for (let index = 0; index < array.length; index += 3) {
    citiesCounter++;
    let city = array[index];
    let currIncome = Number(array[index + 1]);
    let currExpenses = Number(array[index + 2]);

    if (citiesCounter % 5 == 0) {
      currIncome -= currIncome * 0.10;
    }else {
      if (citiesCounter % 3 == 0) {
        currExpenses += currExpenses * 0.50;
      }
    }

    let currProfit = currIncome - currExpenses;

    console.log(`In ${city} Burger Bus earned ${currProfit.toFixed(2)} leva.`);
    totalIncome += currProfit;
  }

  console.log(`Burger Bus total profit: ${totalIncome.toFixed(2)} leva.`);
}

// burgerBus(["3",
// "Sofia",
// "895.67",
// "213.50",
// "Plovdiv",
// "2563.20",
// "890.26",
// "Burgas",
// "2360.55",
// "600.00"])

burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])
