function palindromeIntegers(array) {

  for (let currNumber of array) {
    let numberStr = currNumber.toString();
    let reversedNumber = "";
    for(let i = numberStr.length - 1; i >= 0; i--) {
      reversedNumber += numberStr[i];
    }

    if (numberStr === reversedNumber) {
      console.log("true");
    }else {
      console.log("false");
    }
  }
}

palindromeIntegers([123,323,421,121])