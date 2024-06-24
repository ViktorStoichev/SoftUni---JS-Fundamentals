function revealWords(words, text) {
  let checkWords = words.split(", ");
  let arrayText = text.split(" ");
  for (let el of arrayText) {
    if (el.includes("*")) {
      for (let word of checkWords) {
        if (word.length === el.length) {
          text = text.replace(el, word)
        }
      }
    }
  }

  console.log(text);
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')