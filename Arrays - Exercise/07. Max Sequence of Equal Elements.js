function maxSequence(arr) {
  let longerArrCheck = [];
  let longest = [];
  
  for (let i = 0; i < arr.length; i++) {
    longerArrCheck = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        longerArrCheck.push(arr[j]);
      }else {
        break;
      }
    }
    if (longerArrCheck.length > longest.length) {
      longest = longerArrCheck;
    }

    i += longerArrCheck.length - 1;
  }
  console.log(longest.join(" "));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])