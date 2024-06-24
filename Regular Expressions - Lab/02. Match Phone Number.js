function matchPhoneNumber(list) {
  let validPhones = [];
  let pattern = /[+]359([ -])2\1\d{3}\1\d{4}\b/g;
  let phone = null;

  while ((phone = pattern.exec(list)) !== null) {
    validPhones.push(phone[0]);
  }

  console.log(validPhones.join(", "));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])