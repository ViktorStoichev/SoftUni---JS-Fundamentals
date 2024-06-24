function printNxNMatrix(number) {

  let result = "";
  for (let column = 1; column <= number; column++) {
    let numberStr = number.toString();
    for (let row = 1; row <= number; row++) {
      result += numberStr + " ";
    }
    console.log(result);
    result = "";
  }
}

printNxNMatrix(7);