function theAngryCat(priceRatings, entryPoint, type) {
  let leftSideTotalDamage = 0;
  let rightSideTotalDamage = 0;

  for (let leftSideIndex = 0; leftSideIndex < entryPoint; leftSideIndex++) {
    
    switch (type) {
      case "cheap":
        if (priceRatings[leftSideIndex] < priceRatings[entryPoint]) {
          leftSideTotalDamage += priceRatings[leftSideIndex];
        }
        break;
      case "expensive":
        if (priceRatings[leftSideIndex] >= priceRatings[entryPoint]) {
          leftSideTotalDamage += priceRatings[leftSideIndex];
        }
        break;
    }
  }

  for (let rightSideIndex = entryPoint + 1; rightSideIndex < priceRatings.length; rightSideIndex++) {

    switch (type) {
      case "cheap":
        if (priceRatings[rightSideIndex] < priceRatings[entryPoint]) {
          rightSideTotalDamage += priceRatings[rightSideIndex];
        }
        break;
      case "expensive":
        if (priceRatings[rightSideIndex] >= priceRatings[entryPoint]) {
          rightSideTotalDamage += priceRatings[rightSideIndex];
        }
        break;
    }
  }

  if (rightSideTotalDamage > leftSideTotalDamage) {
    console.log(`Right - ${rightSideTotalDamage}`);
  }else if (leftSideTotalDamage > rightSideTotalDamage) {
    console.log(`Left - ${leftSideTotalDamage}`);
  }else if (leftSideTotalDamage == rightSideTotalDamage) {
    console.log(`Left - ${leftSideTotalDamage}`);
  }
}

theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
  7,
  "expensive")

theAngryCat([5, 10, 12, 5, 4, 20],
  3,
  "cheap")

theAngryCat([1, 5, 1],
  1,
  "cheap")
  
  
  
   