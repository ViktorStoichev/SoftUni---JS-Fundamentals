function coffeeLover(array) {
  let coffeeList = array.shift().split(" ");
  let commandsNumber = Number(array.shift());

  for (let index = 0; index < commandsNumber; index++) {
    let [firstCommand, secondCommand, thirdCommand] = array[index].split(" ");

    switch (firstCommand) {
      case "Include":
        coffeeList.push(secondCommand);
        break;
      case "Remove":
        if (thirdCommand <= coffeeList.length) {
          if (secondCommand === "first") {
            coffeeList.splice(0, thirdCommand);
          }else if (secondCommand === "last") {
            coffeeList.reverse();
            coffeeList.splice(0, thirdCommand);
            coffeeList.reverse();
          }
        }
        break;
      case "Prefer":
        if ((secondCommand + thirdCommand) + 1 >= coffeeList.length) {
          let changed = coffeeList[secondCommand];
          coffeeList[secondCommand] = coffeeList[thirdCommand];
          coffeeList[thirdCommand] = changed;
        }
        break;
      case "Reverse":
        coffeeList.reverse();
        break;
    }
  }

  console.log("Coffees:");

  console.log(coffeeList.join(" "));
}

// coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
// "5",
// "Include TurkishCoffee",
// "Remove first 2",
// "Remove last 1",
// "Prefer 3 1",
// "Reverse"])

coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
"3",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 4 1"])

