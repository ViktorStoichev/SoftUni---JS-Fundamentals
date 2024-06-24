function censoredWords(text, word) {
  let censored = "";
  for (let i = 0; i < word.length; i++) {
    censored += "*";
  }

  while (text.includes(word)) {
    text = text.replace(word, censored);
  }

  console.log(text);
}

censoredWords('A small sentence with some words',
'small')
censoredWords('Find the hidden word', 'hidden')