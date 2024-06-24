function imitationGame(array) {
  let message = array.shift();
  let currentLine = array.shift();

  while (currentLine !== "Decode") {

    let tokens = currentLine.split("|");

    switch (tokens[0]) {
      case "Move":
        message = message.split("");
        let letters = message.slice(0, Number(tokens[1]));
        message.splice(0, Number(tokens[1]));
        letters.forEach(l => message.push(l))
        message = message.join("");
        break;
      case "Insert":
        message = message.split("");
        message.splice(Number(tokens[1]), 0, tokens[2]);
        message = message.join("");
        break;
      case "ChangeAll":
        while (message.includes(tokens[1])) {
          message = message.replace(tokens[1], tokens[2]);
        }
    }

    currentLine = array.shift();
  }

  console.log(`The decrypted message is: ${message}`);
}

imitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3', 
  'Decode'])
  
imitationGame([

  'owyouh',
  
  'Move|2',
  
  'Move|3',
  
  'Insert|3|are',
  
  'Insert|9|?',
  
  'Decode'
  
  ])