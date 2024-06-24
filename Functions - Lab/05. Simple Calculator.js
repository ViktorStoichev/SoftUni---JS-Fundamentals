function simpleCalculator(firstNumber, secondNumber, operator) {

  switch (operator) {
    case "multiply":
      let multiply = (firstNumber,secondNumber) => firstNumber * secondNumber;
      console.log(multiply(firstNumber,secondNumber));
      break;
    case "divide":
      let divide = (firstNumber,secondNumber) => firstNumber / secondNumber;
      console.log(divide(firstNumber,secondNumber));
      break;
    case "add":
      let add = (firstNumber,secondNumber) => firstNumber + secondNumber;
      console.log(add(firstNumber,secondNumber));
      break;
    case "subtract":
      let subtract = (firstNumber,secondNumber) => firstNumber - secondNumber;
      console.log(subtract(firstNumber,secondNumber));
      break;
  }
}

simpleCalculator(5, 5, "add");
