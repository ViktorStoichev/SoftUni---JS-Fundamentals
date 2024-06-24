function addAndSubtract(array) {
  let oldSum = 0;
  let newSum = 0;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    oldSum += number;

    if (number % 2 === 0) {
      number += i;
    }else {
      number -= i;
    }

    array[i] = number;

    newSum += number;
  }

  console.log(array);
  console.log(oldSum);
  console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35])