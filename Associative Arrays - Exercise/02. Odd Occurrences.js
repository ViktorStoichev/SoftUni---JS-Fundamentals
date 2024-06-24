function oddOccurrences(string) {
  let arrayElements = string.split(" ");
  let allElements = {};

  for (let element of arrayElements) {
    let fixedElement = element.toLowerCase();
    if (!allElements.hasOwnProperty(fixedElement)) {
      allElements[fixedElement] = 1;
    }else {
      allElements[fixedElement]++;
    }
  }

  let entries = Object.entries(allElements);
  let result = "";

  for (let [element, count] of entries) {
    if (count % 2 !== 0) {
      result += element + " ";
    }
  }

  console.log(result);
}

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')