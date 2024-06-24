function makeADictionary(array) {
  let terms = [];

  for (let command of array) {
    let currTerm = command.split(`"`)[1];
    let currInfo = command.split(`"`)[3];

    let checkSameTerm = terms.find((t) => t.term === currTerm);

    if (checkSameTerm) {
      checkSameTerm.definition = currInfo;
    } else {
      let termObj = { term: currTerm, definition: currInfo };
      terms.push(termObj);
    }
  }

  let sortedTerms = terms.sort((a, b) => a.term.localeCompare(b.term));

  for (let obj of sortedTerms) {
    console.log(`Term: ${obj.term} => Definition: ${obj.definition}`);
  }
}

makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
