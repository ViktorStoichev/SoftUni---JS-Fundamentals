function oddNums(n) {
  let currN = 1;
  let index = 1;
  let sum = 0;
  while (index <= n) {
    console.log(currN);
    sum += currN;
    currN += 2;
    index++;
  }
  console.log(`Sum: ${sum}`);
}

oddNums(5)