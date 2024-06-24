function wordTracker(array) {
  let searchedWords = array.shift().split(" ");
  let wordsObj = {};

  for (let currWord of searchedWords) {
    wordsObj[currWord] = 0;
  }

  for (let word of array) {
    if (word in wordsObj) {
      wordsObj[word]++;
    }
  }

  let entries = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);

  for (let [word, count] of entries) {
    console.log(`${word} - ${count}`);
  }
}

wordTracker([
  'is the', 
  'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])

// wordTracker(['this sentence', 
//   'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences',
//    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])