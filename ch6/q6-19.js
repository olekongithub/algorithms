'use strict';

//Calculate a Pascal's triangle to the nth level
//a[n][x] = a[n-1][x] + a[n-1][x-1]

function pascal(n){
  let result = [[1]]
  for (let current = 1; current < n; current++){
    let newA = []
    for (let i = 0; i <= current; i++){
      let left = i-1 < 0 ? 0 : result[current-1][i-1];
      let right = i === current ? 0 : result[current-1][i];
      newA.push(left + right);
    }
    result.push(newA);
  }
  return result;
}

console.log(pascal(8));
