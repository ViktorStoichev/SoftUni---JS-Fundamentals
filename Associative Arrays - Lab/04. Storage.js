function checkStorage(array) {

  let storage = new Map();

  for (let command of array) {
    let [product, quantity] = command.split(" ");
    quantity = Number(quantity);

    if (!storage.has(product)) {
      storage.set(product, quantity);
    }else {
      let newQuantity = storage.get(product)
      storage.set(product, quantity + newQuantity);
    }
  }

  Array.from(storage).forEach(p => console.log(`${p[0]} -> ${p[1]}`));
}

checkStorage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
)