function maxNumber(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let isBigger = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] <= array[j]) {
        isBigger = false;
      }
    }
    if (isBigger) {
      newArray.push(array[i]);
    }
  }

  console.log(newArray.join(" "));
}

maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([1,4,3,2])
maxNumber([41,41,2,4])