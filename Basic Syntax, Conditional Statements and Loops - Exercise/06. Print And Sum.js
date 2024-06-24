function printAndSum(start,end) {
  let rowDisplay = ""; 
  let sum = 0;
  for (let num = start; num <= end; num++) {
    rowDisplay += num + " ";
    sum += num;
  }
  console.log(rowDisplay);
  console.log(`Sum: ${sum}`);
}

// printAndSum(5,10)
// printAndSum(0,26)
printAndSum(50,60)