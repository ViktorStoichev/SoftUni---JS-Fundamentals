function countStringOcc(string, checkWord) {
  let stringArray = string.split(" ");

  let count = 0;
  for (let word of stringArray) {
    if (word === checkWord) {
      count++;
    }
  }

  console.log(count);
}

countStringOcc('This is a word and it also is a sentence',
'is')