function messageTranslator(array) {
  let commandsCount = Number(array.shift());
  let pattern = /!(?<type>[A-Z][a-z]{3,})!:\[(?<message>[a-zA-Z]{8,})\]/;
  let index = 0;
  let validMessage = null;
  
  while (index < commandsCount) {
    let command = array[index];

    validMessage = pattern.exec(command);
    if (validMessage !== null) {
      let asciiNumbers = validMessage.groups.message.split("").map(char => char.charCodeAt(0));
      let result = `${validMessage.groups.type}: ${asciiNumbers.join(" ")}`
          console.log(result);
    } else {
      console.log("The message is invalid");
    }

    index++;
  }
}

messageTranslator(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"])

messageTranslator(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])

messageTranslator(["3"
  ,"!play!:[TheNewSong]"
  ,"!Ride!:[Bike]"
  ,"!Watch!:[LordofTheRings]"])
