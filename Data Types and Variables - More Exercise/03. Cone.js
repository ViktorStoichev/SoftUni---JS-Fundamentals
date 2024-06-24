function cone(radius,height) {
  let s = Math.sqrt(radius * radius + height * height);
  let volume = Math.PI * radius * radius * height / 3;
  console.log("volume = " + volume.toFixed(4));
  let area = Math.PI * radius * (radius + s);
  console.log("area = " + area.toFixed(4));
}

cone(3.3, 7.8);