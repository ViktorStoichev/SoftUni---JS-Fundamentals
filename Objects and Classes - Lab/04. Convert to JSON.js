function convertToJSON(firstString, secondString, thirdString) {

  let object = {
    name: firstString,
    lastName: secondString,
    hairColor: thirdString
  }

  let objectStr = JSON.stringify(object);
  console.log(objectStr);
}

convertToJSON('George', 'Jones', 'Brown')