function addAndRemove(arr) {
  let newArr = [];
  let number = 0;
  for (let command of arr) {
    number++;

    if (command === "add") {
      newArr.push(number);
    }else {
      newArr.pop();
    }
  }
  
  if (newArr.length < 1) {
    console.log("Empty");
  }

  console.log(newArr.join(" "));
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(["remove", "remove", "remove"])