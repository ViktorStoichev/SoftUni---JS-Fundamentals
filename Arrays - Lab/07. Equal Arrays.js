function equalArrays(firstArray,secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    firstArray[i] = Number(firstArray[i]);
  }

  for (let i = 0; i < secondArray.length; i++) {
    secondArray[i] = Number(secondArray[i]);
  }

  let sum = 0;
  let isIdentical = true;
  for (let i = 0; i < firstArray.length; i++) {
    sum += firstArray[i];
    if (firstArray[i] !== secondArray[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isIdentical = false;
      break;
    }else {
      isIdentical = true;
    }
  }
  if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
equalArrays(["1"], ["10"])