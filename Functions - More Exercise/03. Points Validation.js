function pointsValidatio(points) {
  let [x1, y1, x2, y2] = points.map(Number);

  let checkFirstPoint = firstPoint(points);
  let checkSecondPoint = secondPoint(points);
  let checkThirdPoint = thirdPoint(points);

  if (checkFirstPoint === Math.trunc(checkFirstPoint)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
} else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
}

if (checkSecondPoint === Math.trunc(checkSecondPoint)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
} else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
}

if (checkThirdPoint === Math.trunc(checkThirdPoint)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
} else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

  function firstPoint(points) {
    let checkOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    return checkOne;
  }

  function secondPoint(points) {
    let checkTwo = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    return checkTwo;
  }

  function thirdPoint(points) {
    let checkThree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
    return checkThree;
  }
}

pointsValidatio([3, 0, 0, 4])