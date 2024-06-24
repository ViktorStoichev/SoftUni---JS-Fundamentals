function rightPlace(string,char,result) {
  let replaced = string.replace("_",char);
  if (replaced === result) {
    console.log("Matched");
  }else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "o", "Strong")