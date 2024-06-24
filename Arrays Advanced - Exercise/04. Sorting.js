function sorting(array) {
  array = array.sort((a, b) => a - b);
  let sortedArray = [];

  while (array.length > 0) {
    let biggestNumber = array.pop();
    sortedArray.push(biggestNumber);

    if (array.length > 0) {
      let smallestNumber = array.shift();
      sortedArray.push(smallestNumber);
    }
  }

  console.log(sortedArray.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])