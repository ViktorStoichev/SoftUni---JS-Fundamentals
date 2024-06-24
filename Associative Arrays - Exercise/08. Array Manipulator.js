function arrayManipulator(arr, commands) {
  for (let element of commands) {
    let command = element.split(" ");
    if (command[0] === "add") {
      arr.splice(Number(command[1]), 0, Number(command[2]));
    } else if (command[0] === "addMany") {
      let index = Number(command[1]);
      command.splice(0, 2);
      let nums = command.map(Number);
      arr.splice(index, 0, ...nums);
    } else if (command[0] === "contains") {
      console.log(arr.indexOf(Number(command[1])));
    } else if (command[0] === "remove") {
      arr.splice(Number(command[1]), 1);
    } else if (command[0] === "shift") {
      let i = 0;
      while (i < Number(command[1])) {
        let element = arr.shift();
        arr.push(element);
        i++;
      }
    } else if (command[0] === "sumPairs") {
      let newArr = [];

      if (arr.length % 2 !== 0) {
        arr.push(0);
      }

      for (let i = 0; i < arr.length; i += 2) {
        let sum = arr[i] + arr[i + 1];

        newArr.push(sum);
      }

      arr = newArr;
    } else if (command[0] === "print") {
      console.log(`[ ${arr.join(", ")} ]`);
    }
  }
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
