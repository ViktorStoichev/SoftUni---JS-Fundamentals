function counterStrike(array) {
  let initialEnergy = Number(array.shift());
  let index = 0;
  let command = array[index];
  let battlesWon = 0;

  while (command !== "End of battle") {
    let reduceEnergyBy = Number(command);

    if (initialEnergy >= reduceEnergyBy) {
      battlesWon++;
      initialEnergy -= reduceEnergyBy;
    }else {
      console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${initialEnergy} energy`);
      break;
    }

    if (battlesWon % 3 === 0) {
      initialEnergy += battlesWon;
    }

    index++;
    command = array[index];
  }

  if (command === "End of battle") {
    console.log(`Won battles: ${battlesWon}. Energy left: ${initialEnergy}`);
  }
}

counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10", "End of battle"])

counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])
