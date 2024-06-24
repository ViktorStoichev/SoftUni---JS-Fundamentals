function memoryGame(array) {
  let elements = array.shift().split(" ");
  let index = 0;
  let command = array[index];
  let turnsCount = 0;

  while (command !== "end") {
    turnsCount++;
    let [firstElement, secondElement] = command.split(" ").map(Number);

    if (firstElement < 0 || secondElement < 0 || firstElement === secondElement) {
      let middle = elements.length / 2;
      elements.splice(middle, 0, `-${turnsCount}a`,`-${turnsCount}a`)
      console.log("Invalid input! Adding additional elements to the board");
    }else {
      if (elements[firstElement] === elements[secondElement]) {
        let currElement = elements[firstElement];
        let currIndex = elements.indexOf(currElement);
        while (currIndex > -1) {
          elements.splice(currIndex, 1);
  
          currIndex = elements.indexOf(currElement)
        }
  
        console.log(`Congrats! You have found matching elements - ${currElement}!`);
      }else {
        console.log("Try again!");
      }
    }

    if (elements.length <= 0) {
      console.log(`You have won in ${turnsCount} turns!`);
      break;
    }

    index++;
    command = array[index];
  }

  if(command === "end") {
    console.log("Sorry you lose :(");
    console.log(elements.join(" "));
  }
}

// memoryGame( ["1 1 2 2 3 3 4 4 5 5", 

//   "1 0",
//   "-1 0",
//   "1 0", 
//   "1 0", 
//   "1 0", 
//   "end"])

memoryGame([
  "a 2 4 a 2 4", 
  "0 3", 
  "0 2",
  "0 1",
  "0 1", 
  "end"])

// memoryGame([
//   "a 2 4 a 2 4", 
//   "4 0", 
//   "0 2",
//   "0 1",
//   "0 1", 
//   "end"])