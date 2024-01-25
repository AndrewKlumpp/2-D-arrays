function spiralOrder(matrix) {
  let rows = matrix.length;
  let row = 0;
  let cols = matrix[0].length;
  let col = 0;
  let pushed = 0;
  let needPushed = rows * cols;
  let output = [];

  while (pushed < needPushed) {
    for (let i = col; i < cols; i++) {
      output.push(matrix[row][i]);
      pushed++;
    }
    row++;

    for (let i = row; i < rows; i++) {
      output.push(matrix[i][cols - 1]);
      pushed++;
    }
    cols--;

    for (let i = cols - 1; i >= col; i--) {
      output.push(matrix[rows - 1][i]);
      pushed++;
    }
    rows--;

    for (let i = rows - 1; i >= row; i--) {
      output.push(matrix[i][col]);
      pushed++;
    }
    col++;
  }

  return output;
};


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
