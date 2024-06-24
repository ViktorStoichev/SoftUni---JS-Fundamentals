function signCheck(firstNumber, secondNumber, thirdNumber) {

  let firstAndSecondResult = firstNumber * secondNumber;

  let finalResult = (firstAndSecondResult, thirdNumber) => firstAndSecondResult * thirdNumber;
 
  if (finalResult(firstAndSecondResult, thirdNumber) > 0) {
    console.log("Positive");
  }else if (finalResult(firstAndSecondResult, thirdNumber) < 0) {
    console.log("Negative");
  }
}

signCheck(5, 12, -15);
