// function stringSubstring(word, text) {
//   text = text.toLowerCase();
//   if (text.includes(word)) {
//     console.log(word);
//   } else {
//     console.log(`${word} not found!`);
//   }
// }

function stringSubstring(findWord, text) {
  text = text.toLowerCase().split(" ");
  let wordFounded = false;
  for (let currWord of text) {
    if (currWord === findWord) {
      wordFounded = true;
      console.log(currWord);
    }
  }

  if (!wordFounded) {
    console.log(`${findWord} not found!`);
  }
}

stringSubstring('javascript',
'JavaScript is the best programming language')
stringSubstring('python',
'JavaScript is the best programming language')