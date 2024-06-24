function commonElements(firstArray,secondArray) {
  for (let str of firstArray) {
    if (secondArray.includes(str)) {
      console.log(str);
    }
  }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)