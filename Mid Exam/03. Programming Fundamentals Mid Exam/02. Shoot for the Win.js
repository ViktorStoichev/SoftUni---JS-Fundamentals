function shootForTheWin(array) {
  let currTargets = array.shift().split(" ").map(Number);
  let index = 0;
  let command = array[index];
  let shotsTaken = [];
  let shotsCount = 0;

  while (command !== "End") {
    let shootAt = Number(command);

    if (shootAt > currTargets.length - 1) {
      index++;
      command = array[index];
      continue;
    }else {
      if (shotsTaken.includes(shootAt)) {
        index++;
        command = array[index];
        continue;
      }else {
        for (let i = 0; i < currTargets.length; i++) {
          if (shotsTaken.includes(i)) {
            continue;
          }else {
            if (i === shootAt) {
              continue;
            }else {
              if (currTargets[i] > currTargets[shootAt]) {
                currTargets[i] -= currTargets[shootAt];
              }else {
                currTargets[i] += currTargets[shootAt];
              }
            }
          }
        }
        currTargets[shootAt] = -1;
      }
    }

    shotsTaken.push(shootAt);

    shotsCount++;

    index++;
    command = array[index];
  }

  if (command === "End") {
    console.log(`Shot targets: ${shotsCount} -> ${currTargets.join(" ")}`);
  }
}

shootForTheWin(["24 50 36 70",
"0",
"0",
"4",
"3",
"1",
"End"])

shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
