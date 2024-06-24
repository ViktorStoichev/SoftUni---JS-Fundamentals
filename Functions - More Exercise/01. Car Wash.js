function carWash(commands) {

  let checkCleanPercent = cleanCarPercent(commands);

  console.log(`The car is ${checkCleanPercent.toFixed(2)}% clean.`);

  function cleanCarPercent(commands) {

    let percentClean = 0;

    for (let currCommand of commands) {

      switch (currCommand) {
        case "soap":
          percentClean += 10;
          break;
        case "water":
          percentClean += percentClean * 0.20;
          break;
        case "vacuum cleaner":
          percentClean += percentClean * 0.25;
          break;
        case "mud":
          percentClean -= percentClean * 0.10;
          break;
      }
    }
    percentClean / 100;
    return percentClean;
  }
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])