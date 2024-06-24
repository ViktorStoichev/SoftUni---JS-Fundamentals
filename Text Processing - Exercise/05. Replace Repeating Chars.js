function replaceRepeatingChars(string) {
  let result = "";

  for (let index in string) {
    if (string[index] !== string[index - 1]) {
      result += string[index];
    }
  }

  console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')