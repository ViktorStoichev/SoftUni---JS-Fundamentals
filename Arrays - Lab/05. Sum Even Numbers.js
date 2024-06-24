function sumEvenNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let number = Number(array[i]);
    if (number % 2 == 0) {
      sum += number;
    }
  }

  console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6'])