function findPerfectNumber(number) {

  let isPerfect = checkPerfectNumber(number);

  if (number == isPerfect) {
    console.log("We have a perfect number!");
  }else {
    console.log("It's not so perfect.");
  }


  function checkPerfectNumber(number) {

    let sum = 0;

    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    
    return sum;
  }
}

findPerfectNumber(28)