function smallestTwoNumbers(array) {
  let sorted = array.sort((a, b) => a - b);
  let firstSmallNum = array.shift();
  let secondSmallNum = array.shift();
  console.log(firstSmallNum, secondSmallNum);
}

smallestTwoNumbers([30, 15, 50, 5])