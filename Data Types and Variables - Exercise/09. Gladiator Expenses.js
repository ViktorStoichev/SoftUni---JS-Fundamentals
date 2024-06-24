function gladiatorExpenses(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
  let brokenHelmet = 0;
  let brokenSword = 0;
  let brokenShield = 0;
  let brokenArmor = 0;
  let helmetIsBroken = false;
  let swordIsBroken = false;

  for (let fight = 1; fight <= lostFights; fight++) {
    if (fight % 2 == 0) {
      helmetIsBroken = true;
      brokenHelmet++;
    }else {
      helmetIsBroken = false;
    }
    
    if (fight % 3 == 0) {
      swordIsBroken = true;
      brokenSword++;
    }else {
      swordIsBroken = false;
    }

    if (helmetIsBroken && swordIsBroken) {
      brokenShield++;
      if (brokenShield % 2 == 0) {
        brokenArmor++;
      }
    }
  }

  let expenses = (brokenHelmet * helmetPrice) + (brokenSword * swordPrice)
   + (brokenShield * shieldPrice) + (brokenArmor * armorPrice);

   console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7,2,3,4,5)
gladiatorExpenses(23,12.50,21.50,40,200)