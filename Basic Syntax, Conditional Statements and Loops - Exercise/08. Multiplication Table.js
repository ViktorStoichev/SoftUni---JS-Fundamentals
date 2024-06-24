function multiplicationTable(parametar) {
  let printResult = "";
  for (let multiplier = 1; multiplier <= 10; multiplier++) {
    let sum = 0;
    sum = parametar * multiplier;
    console.log(`${parametar} X ${multiplier} = ${sum}`);
  }
}

multiplicationTable(2)