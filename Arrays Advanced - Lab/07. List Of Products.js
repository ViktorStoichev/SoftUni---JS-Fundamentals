function listOfProducts(array) {
  let sorted = array.sort();
  let count = 0;

  for (let product of sorted) {
    count++;
    console.log(`${count}.${product}`);
  }
}

// function listOfProducts(arr) {
//   let list = arr.sort();

//   for (let i = 0; i < list.length; i++) {
//       let element =(`${i+1}.${list[i]}`);
//       console.log(element);
//   }
// }

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])