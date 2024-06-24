function magicMatrices(matrix) {
  let firstArray = matrix[0];
  let secondArray = matrix[1];
  let thirdArray = matrix[2];

  let checkEqualRows = sumRows(matrix);
  let checkEqualColums = sumColums(matrix);

  if (checkEqualRows, checkEqualColums) {
    console.log("true");
  }else {
    console.log("false");
  }

  function sumRows(matrix) {
    let rowsEqualSum = false;
    
    let firstRowSum = 0;
    for (let currNumber of firstArray) {
      firstRowSum += currNumber;
    }

    let secondRowSum = 0;
    for (let currNumber of secondArray) {
      secondRowSum += currNumber;
    }

    let thirdRowSum = 0;
    for (let currNumber of thirdArray) {
      thirdRowSum += currNumber;
    }

    if (firstRowSum == secondRowSum && firstRowSum == thirdRowSum
       && secondRowSum == thirdRowSum) {
      rowsEqualSum = true;
    }

    return rowsEqualSum;
  }

  function sumColums(matrix) {
    let columsEqualSum = false;

    let firstColumnSum = firstArray[0] + secondArray[0] + thirdArray[0];

    let secondColumnSum = firstArray[1] + secondArray[1] + thirdArray[1];

    let thirdColumnSum = firstArray[2] + secondArray[2] + thirdArray[2];

    if (firstColumnSum == secondColumnSum && firstColumnSum == thirdColumnSum
       && secondColumnSum == thirdColumnSum) {
      columsEqualSum = true;
    }

    return columsEqualSum;
  }
}

magicMatrices([[4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]])

  magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])