function towns(array) {

  for (let command of array) {
    let [first, second, third] = command.split(" | ");
    second = Number(second);
    third = Number(third);

    let object = {
      town: first,
      latitude: second.toFixed(2),
      longitude: third.toFixed(2)
    }

    console.log(object);
  }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])