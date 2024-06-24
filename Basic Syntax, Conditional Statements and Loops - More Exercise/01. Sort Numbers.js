function sortNums(firstNum, secondNum, thirdNum) {
  if (firstNum >= secondNum && firstNum >= thirdNum) {
    console.log(firstNum);
  }else if (secondNum >= firstNum && secondNum >= thirdNum) {
    console.log(secondNum);
  }else if (thirdNum >= firstNum && thirdNum >= secondNum) {
    console.log(thirdNum);
  }

  if (firstNum >= secondNum && firstNum <= thirdNum || firstNum <= secondNum && firstNum >= thirdNum) {
    console.log(firstNum);
  }else if (secondNum >= firstNum && secondNum <= thirdNum || secondNum <= firstNum && secondNum >= thirdNum) {
    console.log(secondNum);
  }else if (thirdNum >= firstNum && thirdNum <= secondNum || thirdNum <= firstNum && thirdNum >= secondNum) {
    console.log(thirdNum);
  }

  if (firstNum <= secondNum && firstNum <= thirdNum) {
    console.log(firstNum);
  }else if (secondNum <= firstNum && secondNum <= thirdNum) {
    console.log(secondNum);
  }else if (thirdNum <= firstNum && thirdNum <= secondNum) {
    console.log(thirdNum);
  }
}

// sortNums(2,1,3)
sortNums(-2,1,3)
// sortNums(0,0,2)