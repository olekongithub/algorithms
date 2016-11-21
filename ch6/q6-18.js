'use strict';

//Rotate a 2d array 90 degrees

let array = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];

function rotateClockwise(a){
  let result = [[],[],[],[]];
  for (let i = 0; i < a.length; i++){
    for (let j = 0; j < a.length; j++){
      result[j][a.length - i - 1] = a[i][j];
    }
  }
  return result;
}

// console.log(rotateClockwise(array));

//Perform the rotation in place so space required is O(1), time is still O(n^2)

function rotateClockwise2(a){
  let result = [[],[],[],[]];
  let size = a.length-1;
  for (let i = 0; i < Math.floor(a.length/2); i++){
    for (let j = i; j < size - i; j++){
      // console.log(i + ' ' + j);
      let temp1 = a[i][j];
      let temp2 = a[j][size - i];
      let temp3 = a[size - i][size - j];
      let temp4 = a[size - j][i];
      a[j][size-i] = temp1;
      a[size - i][size - j] = temp2;
      a[size - j][i] = temp3;
      a[i][j] = temp4;
      // console.log(a);
    }
  }
  return a;
}

console.log(rotateClockwise2(array));
