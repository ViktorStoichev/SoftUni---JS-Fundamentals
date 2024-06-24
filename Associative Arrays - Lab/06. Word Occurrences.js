function wordOccurrences(array) {
  let wordOcc = {};

  for (let word of array) {

    if (!wordOcc.hasOwnProperty(word)) {
      wordOcc[word] = 1;
    }else {
      wordOcc[word] += 1;
    }
  }

  let sorted = Object.entries(wordOcc).sort((a, b) => b[1] - a[1]);

  sorted.forEach(w => console.log(`${w[0]} -> ${w[1]} times`));
}

// function wordOccurrences(array) {
//   let wordOcc = new Map();

//   for (let word of array) {

//     if (!wordOcc.has(word)) {
//       wordOcc.set(word, 1);
//     }else {
//       wordOcc.set(word, wordOcc.get(word + 1));
//     }
//   }

//   let sorted = Array.from(wordOcc).sort((a, b) => b[1] - a[1]);

//   sorted.forEach(w => console.log(`${w[0]} -> ${w[1]} times`));
// }

wordOccurrences(["Here", "is", "the", "first", "sentence",
 "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])