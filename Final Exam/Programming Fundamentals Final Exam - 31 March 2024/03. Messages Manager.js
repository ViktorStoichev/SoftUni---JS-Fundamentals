function messageManager(array) {
  let capacity = Number(array.shift());
  let command = array.shift();
  let list = {};

  while (command !== "Statistics") {
    let tokens = command.split("=");

    switch (tokens[0]) {
      case "Add":
        if (!list.hasOwnProperty(tokens[1])) {
          list[tokens[1]] = Number(tokens[2]) + Number(tokens[3]);
        }
        break;
      case "Message":
        if (list.hasOwnProperty(tokens[1]) && list.hasOwnProperty(tokens[2])) {
          list[tokens[1]]++;
          list[tokens[2]]++;
        }
        if (list[tokens[1]] >= capacity) {
          delete list[tokens[1]];
          console.log(`${tokens[1]} reached the capacity!`);
        }
        if (list[tokens[2]] >= capacity) {
          delete list[tokens[2]];
          console.log(`${tokens[2]} reached the capacity!`);
        }
        break;
      case "Empty":
        if (tokens[1] === "All") {
          list = {};
        } else if (list.hasOwnProperty(tokens[1])) {
          let username = tokens[1];
          delete list[username];
        }
    }

    command = array.shift();
  }

  let entries = Object.entries(list);
  let count = 0;
  entries.forEach(el => count++);
  console.log(`Users count: ${count}`);
  entries.forEach(el => console.log(`${el[0]} - ${el[1]}`))
}

// messageManager(["20",
// "Add=Mark=3=9",
// "Add=Berry=5=5",
// "Add=Clark=4=0",
// "Empty=Berry",
// "Add=Blake=9=3",
// "Add=Michael=3=9",
// "Add=Amy=9=9",
// "Message=Blake=Amy",
// "Message=Michael=Amy",
// "Statistics"])

messageManager(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"])

messageManager(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"])
