function inventory(array) {
  let items = array.shift().split(", ");
  let index = 0;
  let command = array[index];

  while (command !== "Craft") {

    let [firstCommand, secondCommand] = command.split(" - ");

    switch (firstCommand) {
      case "Collect":
        if (!items.includes(secondCommand)) {
          items.push(secondCommand);
        }else {
          index++;
          command = array[index];
          continue;
        }
        break;
      case "Drop":
        if (items.includes(secondCommand)) {
          items = items.splice(items.indexOf(secondCommand), 1);
        }
        break;
      case "Combine Items":
        let [firstItem, secondItem] = secondCommand.split(":");
        if (items.includes(firstItem)) {
          items = items.splice(items.indexOf(firstItem), 0, secondItem);
        }else {
          index++;
          command = array[index];
          continue;
        }
        break;
      case "Renew":
        if (items.includes(secondCommand)) {
          items = items.splice(items.indexOf(secondCommand), 1);
          items.push(secondCommand);
        }
        break;
    }

    index++;
    command = array[index];
  }

  console.log(items);
}

inventory(['Iron, Wood, Sword', 
  'Collect - Gold', 
  'Drop - Wood', 
  'Craft!'])