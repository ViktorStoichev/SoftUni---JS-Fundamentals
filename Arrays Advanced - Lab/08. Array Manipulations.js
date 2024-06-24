function arrayManipulations(array) {
  let numbers = array.shift(0).split(" ").map(Number);

  for (let manipulation of array) {
    let [command, first, second] = manipulation.split(" ");

    switch (command) {
      case "Add":
        numbers.push(first);
        break;
      case "Remove":
        numbers = numbers.filter(x => x !== Number(first));
        break;
      case "RemoveAt":
        numbers.splice(first, 1);
        break;
      case "Insert":
        numbers.splice(second, 0, first);
        break;
    }
  }

  console.log(numbers.join(" "));
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])