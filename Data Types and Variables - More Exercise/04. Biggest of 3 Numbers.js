function biggestNum(firstNum,secondNum,thirdNum) {
  if (firstNum >= secondNum && firstNum >= thirdNum) {
    console.log(firstNum);
  }else if (secondNum >= firstNum && secondNum >= thirdNum) {
    console.log(secondNum);
  }else if (thirdNum >= firstNum && thirdNum >= secondNum) {
    console.log(thirdNum);
  }
}

biggestNum(-2,7,3)