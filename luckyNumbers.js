function highestNum(arr) {
  let highNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > highNum) {
      highNum = num;
    }
  }
  return highNum;
};

function lowestNum(arr) {
  let lowNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num < lowNum) {
      lowNum = num;
    }
  }
  return lowNum;
};

function luckyNumbers(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let lowNum = lowestNum(row);
    let lowNumColumn = row.indexOf(lowNum);
    let colArr = [];

    for (let j = 0; j < matrix.length; j++) {
      let num = matrix[j][lowNumColumn];
      colArr.push(num);
    }
    let highNum = highestNum(colArr);
    if (lowNum === highNum) return [lowNum];
  }
};


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
