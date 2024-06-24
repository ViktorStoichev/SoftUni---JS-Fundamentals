function evenAndOddSubtraction(array) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < array.length; i++) {
    let number = Number(array[i]);
    if (number % 2 == 0) {
      sumEven += number;
    }else {
      sumOdd += number;
    }
  }

  console.log(sumEven - sumOdd);
}

evenAndOddSubtraction(['1','2','3','4','5','6'])
evenAndOddSubtraction([3,5,7,9])