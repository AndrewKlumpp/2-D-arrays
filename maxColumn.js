function maxColumn(matrix) {
  let returnArray = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let colMax = matrix[0][i]
    for (let j = 1; j < matrix.length; j++) {
      if (matrix[j][i] > colMax) {
        colMax = matrix[j][i];
      }
    }
    returnArray.push(colMax);
  }
  return returnArray;
};


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]
