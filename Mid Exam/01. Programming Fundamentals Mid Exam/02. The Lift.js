function theLift(array) {
  let tourist = Number(array[0]);
  let wagons = array[1].split(" ").map(Number)
  let capacity = 4;
  let totalCapacity = wagons.length * 4;
  let takenSeats = 0;

  for (let i = 0; i < wagons.length; i++) {
    if (wagons[i] < capacity) {
      let space = capacity - wagons[i];
      let count = 0;

      for (let j = 1; j <= tourist; j++) {
        if (space > 0) {
          space--;
          wagons[i]++;
          count++;
        } 
      }

      tourist -= count;
      count = 0;
    }
  }

  for (let currWagon of wagons) {
    takenSeats += currWagon;
  }
  let availableSpace = totalCapacity - takenSeats;

  if (tourist > 0 && availableSpace <= 0) {
    console.log(`There isn't enough space! ${tourist} people in a queue!`);
    console.log(wagons.join(" "));
  }else if (tourist <= 0 && availableSpace > 0) {
    console.log("The lift has empty spots!");
    console.log(wagons.join(" "));
  }else if (availableSpace <= 0 && tourist <= 0) {
    console.log(wagons.join(" "));
  }
}

theLift(["15", "0 0 0 0"])
theLift(["20", "0 2 0"])