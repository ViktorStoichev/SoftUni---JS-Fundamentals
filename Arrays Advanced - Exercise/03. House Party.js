function houseParty(array) {
  let newList = [];

  for (let command of array) {
    let splited = command.split(" ");
    let name = splited.shift();

    if (!command.includes("not")) {
      if (!newList.includes(name)) {
        newList.push(name);
      }else {
        console.log(`${name} is already in the list!`);
      };
    }else {
      if (newList.includes(name)) {
        newList.splice(newList.indexOf(name), 1);
      }else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  console.log(newList.join("\n"));
}

// houseParty(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!'])

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])