function login(input) {
  let username = input[0];
  let reversedUsername = "";
  for (let i = username.length - 1; i >= 0; i--) {
    reversedUsername += username[i];
  }
  let numOfTries = 0;
  let index = 1;
  let password = input[index];
  index++;
  while (password !== reversedUsername) {
    numOfTries++;
    if (numOfTries > 3) {
      console.log(`User ${username} blocked!`);
      break;
    }else {
      console.log("Incorrect password. Try again.");
    }

    password = input[index];
    index++
  }

  if (password === reversedUsername) {
    console.log(`User ${username} logged in.`);
  }
}

// login(["Acer","login","go","let me in", "recA"])
login(["momo","omom"])
// login(["sunny","rainy","cloudy","sunny","not sunny"])