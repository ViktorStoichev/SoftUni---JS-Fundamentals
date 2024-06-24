function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

  let sum = firstNumber + secondNumber;

  let subtract = (sum, thirdNumber) => sum - thirdNumber;

  console.log(subtract(sum, thirdNumber));
   
}

addAndSubtract(23, 6, 10);
