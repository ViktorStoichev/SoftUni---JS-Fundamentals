function repeatString(str, count) {

  let result = "";
  for (let i = 1; i <= count; i++) {
    result += str;
  }

  return result;
}

repeatString("abc", 3)
