function dungeonestDark(string) {
  let health = 100;
  let coins = 0;
  let dungeons = string[0].split("|");
  let roomsCount = 0;

  for (let room of dungeons) {
    let [command, value] = room.split(" ");
    value = Number(value);
    if (health <= 0) {
      break;
    }
    roomsCount++;

    switch (command) {
      case "potion":
        if (health + value <= 100) {
          health += value;
          console.log(`You healed for ${value} hp.`);
          console.log(`Current health: ${health} hp.`);
        } else {
          console.log(`You healed for ${100 - health} hp.`);
          health = 100;
          console.log(`Current health: ${health} hp.`);
        }
        break;
      case "chest":
        coins += value;
        console.log(`You found ${value} coins.`);
        break;
      default:
        health -= value;
        if (health > 0) {
          console.log(`You slayed ${command}.`);
        } else {
          console.log(`You died! Killed by ${command}.` );
        }
        break;
    }
  }

  if (health <= 0) {
    console.log(`Best room: ${roomsCount}`);
  } else {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])