function race(array) {
  let participants = {};
  let namesList = array.shift().split(", ");
  for (let driver of namesList) {
    participants[driver] = 0;
  }

  let patternName = /[A-Za-z]+/g;
  let patternDistance = /[0-9]/g;

  for (let el of array) {
    if (el === "end of race") {
      break;
    }

    let name = el.match(patternName).join("");
    let distance = 0;
    let distanceAsArr = el.match(patternDistance);
    distanceAsArr.forEach(n => distance += Number(n));

    if (participants.hasOwnProperty(name)) {
      participants[name] += distance;
    }
  }

  let sorted = Object.entries(participants).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])
