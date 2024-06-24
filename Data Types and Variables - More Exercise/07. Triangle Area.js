function triangleArea(firstSide,secondSide,thirdSide) {
  let p = (firstSide + secondSide + thirdSide) / 2;
  let area = Math.sqrt(p * (p - firstSide) * (p - secondSide) * (p - thirdSide));
  console.log(area);
}

triangleArea(2, 3.5, 4)