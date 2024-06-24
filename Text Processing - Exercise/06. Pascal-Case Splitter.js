function pascalCaseSplitter(string) {
  console.log(string.split(/(?=[A-Z])/).join(", "))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')