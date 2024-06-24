function searchForANumber(firstArray, secondArray) {
  let newArray = [];
  
  for (let i = 0; i < secondArray[0]; i++) {
    newArray.push(firstArray[i])
  }

  newArray.splice(0, secondArray[1]);

  let count = 0;
  for (let number of newArray) {
    if (number === secondArray[2]) {
      count++;
    }
  }

  console.log(`Number ${secondArray[2]} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
  [5, 2, 3])
  searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])