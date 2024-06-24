function charactersInRange(firstChar, secondChar) {

  let result = "";

  if (firstChar.charCodeAt(0) < secondChar.charCodeAt(0)) {
    for (let i = firstChar.charCodeAt(0) + 1; i < secondChar.charCodeAt(0); i++) {
      result += String.fromCharCode(i) + " ";
    }
  }else if (firstChar.charCodeAt(0) > secondChar.charCodeAt(0)) {
    for (let i = secondChar.charCodeAt(0) + 1; i < firstChar.charCodeAt(0); i++) {
      result += String.fromCharCode(i) + " ";
    }
  }

  console.log(result);
}

charactersInRange("#", ":");
charactersInRange("C", "#")
