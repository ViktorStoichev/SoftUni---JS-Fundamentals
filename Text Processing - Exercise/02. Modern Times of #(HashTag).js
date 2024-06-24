function modernTimes(string) {
  let arrayString = string.split(" ");
  let pattern = /^[a-zA-Z]+$/;
  for (let word of arrayString) {
    if (word.startsWith("#")) {
      word = word.split("").slice(1, word.length).join("")
      let isValid = pattern.test(word);
      if (isValid) {
        console.log(word);
      }
    }
  }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')