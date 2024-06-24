function wagonsCheck(array) {
  let wagons = array.shift(0).split(" ").map(Number);
  let wagonMaxCapacity = array.shift(0);

  for (let command of array) {
    let [first, second] = command.split(" ");

    if (first === "Add") {
      wagons.push(Number(second));
    }else {
      for (let j in wagons) {
        let newPassengers = Number(first);
        if (newPassengers + wagons[j] <= wagonMaxCapacity) {
          wagons[j] += newPassengers;
          break;
        }
      }
    }

  }

  console.log(wagons.join(" "));
}

wagonsCheck(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)