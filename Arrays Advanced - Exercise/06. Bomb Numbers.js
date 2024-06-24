function bombNumbers(array, specialBombAndPower) {
  let specialBomb = specialBombAndPower.shift();
  let power = specialBombAndPower.shift();
  // let i = array.indexOf(specialBomb);

  // while (i > -1) {
  //   if (array[i] === specialBomb) {
  //     let start = i - power;
  //     let end = power * 2 + 1;

  //     if (start < 0) {
  //       start = 0;
  //       end = power + i + 1;
  //     }

  //     let newArray = array.splice(start, end);
  //     i = array.indexOf(specialBomb);
  //   }
  // }

  while(array.includes(specialBomb)) {
    let index = array.indexOf(specialBomb);
    array.splice(Math.max(0, index - power), Math.min(array.length - 1, 2 * power) + 1);
  }
  
  let sum = 0;
  for (let currNumber of array) {
    sum += currNumber;
  }
  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
  [4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1],
  [9, 3])

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
  [2, 1])