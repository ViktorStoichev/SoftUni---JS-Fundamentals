function decryptingCommands(array) {
  let string = array.shift();
  let command = array.shift();

  while (command !== "Finish") {
    let tokens = command.split(" ");

    switch (tokens[0]) {
      case "Replace":
        string = string.split(tokens[1]).join(tokens[2]);
        console.log(string);
        break;
      case "Cut":
        if (
          Number(tokens[1]) < 0 ||
          Number(tokens[2]) >= string.length ||
          Number(tokens[1]) > Number(tokens[2])
        ) {
          console.log("Invalid indices!");
        } else {
          string =
            string.slice(0, Number(tokens[1])) +
            string.slice(Number(tokens[2]) + 1);
          console.log(string);
        }
        break;
      case "Make":
        if (tokens[1] === "Upper") {
          string = string.toUpperCase();
        } else if (tokens[1] === "Lower") {
          string = string.toLowerCase();
        }
        console.log(string);
        break;
      case "Check":
        if (string.includes(tokens[1])) {
          console.log(`Message contains ${tokens[1]}`);
        } else {
          console.log(`Message doesn't contain ${tokens[1]}`);
        }
        break;
      case "Sum":
        if (
          Number(tokens[1]) < 0 ||
          Number(tokens[2]) >= string.length ||
          Number(tokens[1]) > Number(tokens[2])
        ) {
          console.log("Invalid indices!");
        } else {
          let substring = string.slice(Number(tokens[1]), Number(tokens[2]) + 1);
          let sum = 0;
          for (let el of substring) {
            el = el.charCodeAt(0);
            sum += el;
          }
          console.log(sum);
        }
    }

    command = array.shift();
  }
}

// decryptingCommands([
//   "ILikeSoftUni",
//   "Replace I We",
//   "Make Upper",
//   "Check SoftUni",
//   "Sum 1 4",
//   "Cut 1 4",
//   "Finish",
// ]);

decryptingCommands(["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])
