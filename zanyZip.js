function zanyZip(array1, array2) {
  let zipped = [];
  for (let i = 0; i < array1.length || i < array2.length; i++) {
    let el1 = array1[i];
    let el2 = array2[i];
    if (el1 === undefined) {
      el1 = null;
    }
    if (el2 === undefined) {
      el2 = null;
    }
    zipped.push([el1, el2]);
  }
  return zipped;
};

console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
