function printNthElement(arr) {
  let n = Number(arr.pop());
  let newArray = [];

  for (let i = 0; i < arr.length; i += n) {
    newArray.push(arr[i]);
  }

  console.log(newArray.join(" "));
}

printNthElement(['5', '20', '31', '4', '20', '2','1', '2', '3', '4', '5', '2'])