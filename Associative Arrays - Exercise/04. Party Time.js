function partyTime(array) {
  let invitedGuests = array.splice(0, array.indexOf("PARTY"));
  array.splice(0, 1);
  let pattern = /^[0-9]+$/;
  let vipList = [];
  let regularList = [];

  for (let guest of invitedGuests) {
    let firstSymbol = guest.split("").shift();
    let isVip = pattern.test(firstSymbol);

    if (isVip) {
      vipList.push(guest);
    } else {
      regularList.push(guest);
    }
  }

  for (let guest of array) {
    if (vipList.includes(guest)) {
      vipList.splice(vipList.indexOf(guest), 1);
    } else if (regularList.includes(guest)) {
      regularList.splice(regularList.indexOf(guest), 1);
    }
  }

  console.log(vipList.length + regularList.length);
  vipList.forEach(guest => console.log(guest));
  regularList.forEach(guest => console.log(guest));

}

// partyTime([
//   "7IK9Yo0h",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
//   "tSzE5t0p",
//   "PARTY",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
// ]);

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'])
