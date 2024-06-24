function topFiveNumbers(array) {
  let numbers = array.split(" ").map(Number);
  let sumOfNumbers = 0;

  for (let number of numbers) {
    sumOfNumbers += number;
  }

  let averageNumber = sumOfNumbers / numbers.length;
  let topFive = [];
  let sortedNumbers = numbers.sort((a, b) => b - a);
  
  for (let index = 0; index < 5; index++) {
    if (sortedNumbers[index] > averageNumber) {
      topFive.push(sortedNumbers[index]);
    }
  }

  if (topFive.length < 1) {
    console.log("No");
  }else {
    console.log(topFive.join(" "));
  }
}

topFiveNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
// topFiveNumbers(['-1 -2 -3 -4 -5 -6'])
// topFiveNumbers(["1"])
// topFiveNumbers(['10 20 30 40 50'])