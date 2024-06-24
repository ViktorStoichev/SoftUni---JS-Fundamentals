function muOnline(str) {
  let array = str.split("|");
  let health = 100;
  let bitcoins = 0;
  let room = 0;

  for (let command of array) {
    room++;

    let [currCommand, numberStr] = command.split(" ");
    let number = Number(numberStr);

    switch (currCommand) {
      case "potion":
        if (number + health >= 100) {
          number = 100 - health;
          health = 100;
        }else {
          health += number;
        }
        console.log(`You healed for ${number} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        bitcoins += number;
        console.log(`You found ${number} bitcoins.`);
        break;
      default:
        health -= number;
        if (health > 0) {
          console.log(`You slayed ${currCommand}.`);
        }else {
          console.log(`You died! Killed by ${currCommand}.`);
        }
        break;
    }

    if (health <= 0) {
      console.log(`Best room: ${room}`);
      break;
    }
  }

  if (health > 0) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")