function shoppingList(array) {
  let list = array.shift().split("!");
  let index = 0;
  let command = array[index];

  while (command !== "Go Shopping!") {
    let [type, product, newProduct] = command.split(" ");

    switch (type) {
      case "Urgent":
        if (list.includes(product)) {
          index++;
          command = array[index];
          continue;
        } else {
          list.unshift(product);
        }
        break;
      case "Unnecessary":
        if (list.includes(product)) {
          list.splice(list.indexOf(product), 1);
        } else {
          index++;
          command = array[index];
          continue;
        }
        break;
      case "Correct":
        if (list.includes(product)) {
          let indexOfProduct = list.indexOf(product);
          list[indexOfProduct] = newProduct;
        } else {
          index++;
          command = array[index];
          continue;
        }
        break;
      case "Rearrange":
        if (list.includes(product)) {
          list.splice(list.indexOf(product), 1);
          list.push(product);
        } else {
          index++;
          command = array[index];
          continue;
        }
        break;
    }

    index++;
    command = array[index];
  }

  console.log(list.join(", "));
}

// shoppingList([
//   "Tomatoes!Potatoes!Bread",
//   "Unnecessary Milk",
//   "Urgent Tomatoes",
//   "Go Shopping!",
// ]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

