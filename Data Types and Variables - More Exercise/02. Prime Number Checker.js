function primeNumCheker(number) {
  let isPrime = true;
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log("true");
  }else {
    console.log("false");
  }
}

primeNumCheker(8)