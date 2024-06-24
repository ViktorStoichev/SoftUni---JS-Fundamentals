function spiceMustFlow(startingYield) {
  let spices = 0;
  let days = 0;
  while (startingYield >= 100) {
    days++;
    spices += startingYield;

    spices -= 26;

    startingYield -= 10;
  }

  if (spices >= 26) {
    spices -= 26;
  }

  console.log(days);
  console.log(spices);
}

spiceMustFlow(450)