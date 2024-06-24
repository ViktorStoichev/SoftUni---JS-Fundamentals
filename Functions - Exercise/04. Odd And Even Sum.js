function oddAndEvenSum(number) {
  
  let numberStr = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < numberStr.length; i++) {
    let currNumber = Number(numberStr[i]);

    if (currNumber % 2 == 0) {
      evenSum += currNumber;
    }else {
      oddSum += currNumber;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)