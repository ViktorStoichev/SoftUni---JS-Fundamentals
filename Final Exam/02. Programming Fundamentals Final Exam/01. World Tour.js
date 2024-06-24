function worldTour(array) {
  let travelStops = array.shift();
  let command = array.shift();

  while (command !== "Travel") {
    let tokens = command.split(":");

    switch (tokens[0]) {
      case "Add Stop":
        travelStops = travelStops.split("");
        travelStops.splice(Number(tokens[1]), 0, tokens[2]);
        travelStops = travelStops.join("");
        break;
      case "Remove Stop":
        travelStops = travelStops.substring(Number(tokens[1]), Number(tokens[2]));
        break;
      case "Switch":
        if (travelStops.icnludes(tokens[1])) {
          travelStops.replaceAll(tokens[1], tokens[2]);
        }
        break;
    }

    command = array.shift();
  }

  console.log(travelStops);
}

worldTour((["Hawai::Cyprys-Greece",

"Add Stop:7:Rome",

"Remove Stop:11:16",

"Switch:Hawai:Bulgaria",

"Travel"]))