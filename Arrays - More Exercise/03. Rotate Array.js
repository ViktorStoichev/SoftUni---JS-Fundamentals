function rotateArray(arr) {
  let rotations = Number(arr.pop());
  for (let count = 1; count <= rotations; count++) {
    let rotatedNum = arr.pop();
    arr.unshift(rotatedNum);
  }

  console.log(arr.join(" "));
}

// rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])