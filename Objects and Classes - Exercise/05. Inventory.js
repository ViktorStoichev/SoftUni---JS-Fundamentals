function checkInventory(array) {
  let heroes = [];

  for (let command of array) {
    let [heroName, heroLevel, heroItems] = command.split(" / ");
    heroLevel = Number(heroLevel);

    let inventoryObj = {name: heroName, level: heroLevel, items: heroItems};
    heroes.push(inventoryObj);
  }

  let sortedHeroes = heroes.sort((a, b) => a.level - b.level);
  
  for (let hero of sortedHeroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}

checkInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'])