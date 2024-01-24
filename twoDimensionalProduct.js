function twoDimensionalProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    let subArray = arr[i];
    for (let j = 0; j < subArray.length; j++) {
      num = subArray[j];
      product = product * num;
    }
  }
  return product;
};



let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
