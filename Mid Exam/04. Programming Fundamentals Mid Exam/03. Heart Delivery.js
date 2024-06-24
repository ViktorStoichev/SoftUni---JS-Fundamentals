function heartDelivery(array) {
  let houses = array.shift().split("@").map(Number);
  let index = 0;
  let command = array[index];
  let cupidPosition = 0;
  let jumpsCount = 0;

  while (command !== "Love!") {
    let [jumpStr, currJumpStr] = command.split(" ");
    let currJump = Number(currJumpStr);
    jumpsCount++;

    
      if (jumpsCount == 1) {
        cupidPosition = currJump + 0;
        if (cupidPosition >= houses.length) {
          cupidPosition = 0;
          if (houses[cupidPosition] == 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
            index++;
            command = array[index];
            continue;
          }else {
            houses[cupidPosition] -= 2;
            if (houses[cupidPosition] == 0) {
              console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
          }
        }else {
          if (houses[cupidPosition] == 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
            index++;
            command = array[index];
            continue;
          }else {
            houses[cupidPosition] -= 2;
            if (houses[cupidPosition] == 0) {
              console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
          }
        }
      }else {
        cupidPosition = cupidPosition + currJump;
        if (cupidPosition >= houses.length) {
          cupidPosition = 0;
          if (houses[cupidPosition] == 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
            index++;
            command = array[index];
            continue;
          }else {
            houses[cupidPosition] -= 2;
            if (houses[cupidPosition] == 0) {
              console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
          }
        }else {
          if (houses[cupidPosition] == 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
            index++;
            command = array[index];
            continue;
          }else {
            houses[cupidPosition] -= 2;
            if (houses[cupidPosition] == 0) {
              console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
          }
        }
      }
    

    index++;
    command = array[index];
  }

  console.log(`Cupid's last position was ${cupidPosition}.`);

  let failed = 0;
  for (let hearts of houses) {
    if (hearts > 0) {
      failed++;
    }
  }

  if (failed == 0) {
    console.log("Mission was successful.");
  }else {
    console.log(`Cupid has failed ${failed} places.`);
  }
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])

// heartDelivery(["2@4@2",
// "Jump 2",
// "Jump 2",
// "Jump 8",
// "Jump 3",
// "Jump 1",
// "Love!"])
