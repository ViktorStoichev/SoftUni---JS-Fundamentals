function processOddNumbers(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      result.unshift(array[i] * 2);
    }
  }

  console.log(result.join(" "));
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])