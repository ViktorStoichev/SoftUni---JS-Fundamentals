function createLoadingBar(number) {
  let checkLoaded = printLoaded(number);
  let checkLoadingLeft = printLoadingNeeded(number)

  let loadingBar = checkLoaded + checkLoadingLeft;

  if (number == 100) {
    console.log("100% Complete!");
  }else {
    console.log(`${number}% [${loadingBar}]`);
    console.log("Still loading...");
  }

  function printLoaded(number) {
    let loadedCount = number / 10;
    let loadedSymbols = "";
    for(let i = 1; i <= loadedCount; i++) {
      loadedSymbols += "%";
    }

    return loadedSymbols;
  }

  function printLoadingNeeded(number) {
    let loadingLeftCount = (100 - number) / 10;
    let loadingLeftSymbols = "";
    
    for (let i = 1; i <= loadingLeftCount; i++) {
      loadingLeftSymbols += ".";
    }

    return loadingLeftSymbols;
  }
}

createLoadingBar(30)