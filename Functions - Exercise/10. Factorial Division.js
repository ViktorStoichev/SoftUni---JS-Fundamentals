function divideTwoFactorials(first, second) {
  let firstFactorial = findFirstFactorial(first);
  let secondFactorial = findSecondFactorial(second);

  let result = firstFactorial / secondFactorial;
  console.log(result.toFixed(2));

  function findFirstFactorial(first) {
    let factorial = 1;

    while (first > 1) {
      factorial *= first;

      first--;
    }

    return factorial;
  }

  function findSecondFactorial(second) {
    let factorial = 1;

    while (second > 1) {
      factorial *= second;

      second--
    }


    return factorial;
  }
}

divideTwoFactorials(6,2)