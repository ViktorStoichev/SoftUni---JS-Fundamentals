function reverseAnArrayOfNumbers(number,array) {

  // let result = "";
  // for (let i = number - 1; i >= 0; i--) {
  //   result += array[i] + " ";
  // }

  let result = array.slice(0,number);

  console.log(result.reverse());
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])