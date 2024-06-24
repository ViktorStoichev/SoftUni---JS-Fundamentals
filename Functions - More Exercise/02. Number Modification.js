function numberModification(number) {

  let checkModification = modification(number);

  console.log(checkModification);

  function modification(number) {

    let numberStr = number.toString();
    let average = 0;

    while (average <= 5) {
      let sum = 0;
      let count = 0;
      for (let i = 0; i < numberStr.length; i++) {
        let currNumber = Number(numberStr[i]);
  
        sum += currNumber;
        count++;
      }
  
      average = sum / count;

      if (average > 5) {
        return numberStr;
      }

      numberStr += "9";
    }

    return numberStr;
  }
}

numberModification(5835)