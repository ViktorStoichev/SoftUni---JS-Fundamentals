function triplesOfLetters(lastLetter) {
  for (let i = 0; i < lastLetter; i++) {
    let firstLetter = String.fromCharCode(97 + i);
    for (let j = 0; j < lastLetter; j++) {
      let secondLetter = String.fromCharCode(97 + j);
      for (let k = 0; k < lastLetter; k++) {
        let thirdLetter = String.fromCharCode(97 + k);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}

triplesOfLetters(3)