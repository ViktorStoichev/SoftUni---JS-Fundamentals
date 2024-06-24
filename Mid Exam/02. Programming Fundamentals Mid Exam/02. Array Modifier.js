function arrayModifier(array) {
  let modifiedArray = array.shift().split(" ").map(Number);
  let index = 0;
  let str = array[index];

  while (str !== "end") {
    
    let [command, firstIndex, secondIndex] = str.split(" ");

    switch (command) {
      case "swap":
        let swapFirstElement = modifiedArray[firstIndex];
        let swapSecondElement = modifiedArray[secondIndex];
        modifiedArray[firstIndex] = swapSecondElement;
        modifiedArray[secondIndex] = swapFirstElement;
        break;
      case "multiply":
        modifiedArray[firstIndex] = modifiedArray[firstIndex] * modifiedArray[secondIndex];
        break;
      case "decrease":
        modifiedArray = modifiedArray.map(n => n - 1);
        break;
    }

    index++;
    str = array[index];
  }

  console.log(modifiedArray.join(", "));
}

// arrayModifier(['23 -2 321 87 42 90 -123',
//   'swap 1 3',
//   'swap 3 6',
//   'swap 1 0',
//   'multiply 1 2',
//   'multiply 2 1',
//   'decrease',
//   'end'])

arrayModifier([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
]
)