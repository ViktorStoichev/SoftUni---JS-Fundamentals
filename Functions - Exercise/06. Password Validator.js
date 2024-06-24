function isThisPasswordValid(password) {

  let isLengthValid = checkLength(password);
  let isOnlyLetterDigits = checkOnlyLettersDigits(password);
  let itHasAtLeastTwoDigits = checkAtLeastTwoDigits(password);

  if(isLengthValid === true && isOnlyLetterDigits === true && itHasAtLeastTwoDigits === true) {
    console.log("Password is valid");
  }

  function checkLength(password) {
    if (password.length >= 6 && password.length <= 10) {
      return true;
    }else {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
  }

  function checkOnlyLettersDigits(password) {
    let pattern = /^[A-Za-z0-9]+$/;
    let isValid = pattern.test(password);
    if (isValid === true) {
      return true;
    }else {
      console.log("Password must consist only of letters and digits");
      return false;
    }
  }

  function checkAtLeastTwoDigits(password) {
    let pattern = /[0-9]{2,}/
    let isValid = pattern.test(password);
    if (isValid === true) {
      return true;
    }else {
      console.log("Password must have at least 2 digits");
      return false;
    }
  }
}

isThisPasswordValid("Pa$s$s")