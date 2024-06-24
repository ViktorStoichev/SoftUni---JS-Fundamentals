function nonDecreasingSubset(numbers) {

  let modified = modifyNonDecreasing(numbers);
  console.log(modified);

  function modifyNonDecreasing(numbers) {
    let biggest = 0;
    let newNumbers = [];

    for (let currNumberStr of numbers) {
      let currNumber = Number(currNumberStr);
      if (currNumber >= biggest) {
        biggest = currNumber;
        newNumbers.push(currNumberStr);
      }
    }

    return newNumbers.join(" ");
  }
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([1, 2, 3, 4])
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])