function thePianist(array) {
  let townsList = [];
  let townsObj = {};
  let command = array.shift();

  while (command !== "Sail") {
    let [currTown, currPeople, currGold] = command.split("||");
    townsObj.town = currTown;
    townsObj.people = currPeople;
    townsObj.gold = currGold;
    townsList.push(townsObj);
    
    command = array.shift();
  }

  townsList.forEach(t => console.log(t))
}

thePianist((["Tortuga||345000||1250",

"Santo Domingo||240000||630",

"Havana||410000||1100",

"Sail",

"Plunder=>Tortuga=>75000=>380",

"Prosper=>Santo Domingo=>180",

"End"]))