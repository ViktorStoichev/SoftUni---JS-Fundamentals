function specialNumbers(number) {
  let digitsSum = 0;
  
  for (let i = 1; i <= number; i++) {
    let numberToString = i.toString();
    for (let j = 0; j < numberToString.length; j++) {
      digitsSum += Number(numberToString[j]);
    }
    if (digitsSum == 5 || digitsSum == 7 || digitsSum == 11) {
      console.log(`${i} -> True`);
    }else {
      console.log(`${i} -> False`);
    }
    digitsSum = 0;
  }
}

specialNumbers(20)