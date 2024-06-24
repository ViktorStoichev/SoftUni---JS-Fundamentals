function checkPhoneBook(array) {
  let phoneBook = {};

  for (let personInfo of array) {
    let [name, phoneNumber] = personInfo.split(" ");

    phoneBook[name] = phoneNumber;
  }

  for (let person in phoneBook) {
    console.log(`${person} -> ${phoneBook[person]}`);
  }
}

checkPhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])