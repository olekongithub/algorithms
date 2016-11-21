'use strict';

//sprial pattern for 2d array, should be 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10 for array

let array = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];

function spiral(a){
  let result = [];
  let imax = a.length - 1;
  let jmax = a.length - 1;
  let imin = 0;
  let jmin = 0;
  while( imin < imax || jmin < jmax ){
    for ( let j = jmin; j <= jmax; j++){
      // console.log(imin + ' ' + j);
      result.push(a[imin][j]);
    }
    imin++;
    for ( let i = imin; i <= imax; i++){
      // console.log(i + ' ' + jmax);
      result.push(a[i][jmax]);
    }
    jmax--;
    for ( let j = jmax; j >= jmin; j--){
      // console.log(imax + ' ' + j);
      result.push(a[imax][j]);
    }
    imax--;
    for ( let i = imax; i >= imin; i--){
      // console.log(i + ' ' + jmin);
      result.push(a[i][jmin]);
    }
    jmin++;;
  }
  return result;
}

console.log(spiral(array));