function sortBy2Criteria(array) {
  let sortedArray = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(sortedArray.join("\n"));
}

sortBy2Criteria(['alpha', 'beta', 'gamma'])