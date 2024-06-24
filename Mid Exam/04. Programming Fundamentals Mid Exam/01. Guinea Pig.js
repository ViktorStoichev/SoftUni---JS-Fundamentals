function guineaPig(array) {
  let foodKg = Number(array[0]);
  let hayKg = Number(array[1]);
  let coverKg = Number(array[2]);
  let weight = Number(array[3]);
  let foodInGrams = foodKg * 1000;
  let hayInGrams = hayKg * 1000;
  let coverInGrams = coverKg * 1000;
  let weightInGrams = weight * 1000;

  for (let day = 1; day <= 30; day++) {
    foodInGrams -= 300;

    if (day % 2 == 0) {
      hayInGrams -= foodInGrams * 0.05;
    }

    if (day % 3 == 0) {
      coverInGrams -= weightInGrams / 3;
    }
  }

  foodKg = foodInGrams / 1000;
  hayKg = hayInGrams / 1000;
  coverKg = coverInGrams / 1000;

  if (foodKg > 0 && hayKg > 0 && coverKg > 0) {
    console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
  } else {
    console.log("Merry must go to the pet store!");
  }
}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
