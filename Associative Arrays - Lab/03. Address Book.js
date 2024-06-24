function checkAddressBook(array) {
  let addressBook = {};

  for (let personInfo of array) {
    let [name, address] = personInfo.split(":");

    addressBook[name] = address;
  }

  let sortedBook = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

  sortedBook.forEach(person => console.log(`${person[0]} -> ${person[1]}`));
}

checkAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)