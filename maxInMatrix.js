function maxInMatrix(matrix) {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    let subMatrix = matrix[i];
    for (let j = 0; j < subMatrix.length; j++) {
      let num = subMatrix[j];
      if (num > max) {
        max = num;
      }
    }
  }
  return max;
};


matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72
