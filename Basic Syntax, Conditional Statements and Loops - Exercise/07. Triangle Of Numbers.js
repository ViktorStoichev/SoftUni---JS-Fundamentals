function triangleOfNums(number) {
  for (let currNum = 1; currNum <= number; currNum++) {
    let rowDisplay = "";
    for (let count = 1; count <= currNum; count++) {
      rowDisplay += currNum + " ";
    }
    console.log(rowDisplay);
  }
}

triangleOfNums(6)