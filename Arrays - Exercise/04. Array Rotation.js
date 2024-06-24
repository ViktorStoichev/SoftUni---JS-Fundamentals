function arrayRotation(array, rotations) {
  for (let count = 1; count <= rotations; count++) {
    let curNum = array.shift(0);
    array.push(curNum);
  }

  console.log(array.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2)