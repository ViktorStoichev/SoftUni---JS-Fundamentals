function movingTarget(array) {
  let currTargets = array.shift().split(" ").map(Number);
  let index = 0;
  let str = array[index];

  while (str !== "End") {
    let [command, currIndexStr, valueStr] = str.split(" ");
    let currIndex = Number(currIndexStr);
    let value = Number(valueStr);

    switch (command) {
      case "Shoot":
        currTargets[currIndex] -= value;
        if (currTargets[currIndex] <= 0) {
          currTargets = currTargets.splice(currIndex, 1);
        }
        break;
      case "Add":
        if (currIndex > currTargets.length - 1) {
          console.log("Invalid placement!");
          index++;
          command = array[index];
          continue;
        } else {
          currTargets[currIndex] = value;
        }
        break;
      case "Strike":
        currTargets.splice(Math.max(0, index - value), Math.min(currTargets.length - 1, 2 * value) + 1)
        break;
    }

    index++;
    command = array[index];
  }

  console.log(currTargets);
}

// movingTarget([
//   "52 74 23 44 96 110",
//   "Shoot 5 10",
//   "Shoot 1 80",
//   "Strike 2 1",
//   "Add 22 3",
//   "End",
// ]);

movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])

