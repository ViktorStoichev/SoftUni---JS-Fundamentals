function convertToObject(string) {

  let newObject = JSON.parse(string);
  
  for (let key in newObject) {
    console.log(`${key}: ${newObject[key]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')