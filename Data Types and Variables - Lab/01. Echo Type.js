function echoType(value) {
  if (typeof(value) === "number" || typeof(value) === "string") {
    console.log(typeof(value));
    console.log(value);
  }else {
    console.log(typeof(value));
    console.log("Parameter is not suitable for printing");
  }
}

echoType(null)