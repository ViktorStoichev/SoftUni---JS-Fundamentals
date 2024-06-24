function lastKNumbersSequance(n,k) {
 
  let array = [1];

  for (let i = 1; i < n; i++) {
      let element = Math.max(array.length - k, 0)

      let lastElements = array.slice(element);
      let sum = 0;
      for (let num of lastElements) {
          sum += num;
      }
      array.push(sum);

  }
  console.log(array.join(' '));
}

lastKNumbersSequance(6, 3)