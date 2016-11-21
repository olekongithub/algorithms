'use strict';

//Check a sudoku square that there are no repeating numbers in rows, columns and subsquares

let sudoku = [
  [0,2,0, 0,4,0, 0,0,0],
  [1,0,9, 0,0,5, 4,6,0],
  [0,0,0, 3,5,0, 0,0,7],

  [3,0,0, 0,7,9, 2,0,1],
  [0,4,0, 0,9,0, 7,0,0],
  [6,5,8, 0,1,0, 0,8,0],

  [0,0,2, 7,0,0, 1,0,0],
  [9,0,8, 0,3,1, 0,0,4],
  [0,0,6, 0,2,0, 0,3,0]
];

function checkSudoku(a){
  let hash = {};
  //check rows
  for (let i = 0; i < a.length; i++){
    hash = {};
    for (let j = 0; j < a.length; j++){
      if (a[i][j] === 0) continue;
      if (hash[a[i][j]] in hash){
        console.log(i + ' ' + j + ' ' + a[i][j])
        return false;
      }
      hash[a[i][j]] = 1;
    }
  }
  //check columns
  for (let  j = 0; j < a.length; j++){
    hash = {};
    for (let i = 0; i < a.length; i++){
      if (a[i][j] === 0) continue;
      if (hash[a[i][j]] in hash){
        console.log(i + ' ' + j + ' ' + a[i][j])
        return false;
      }
      hash[a[i][j]] = 1;
    }
  }
  //check subsquares
  for (let x in [0,1,2]){
    for (let y in [0,1,2]){
      hash = {};
      for (let i = 0 + x*3; i < 3 + x*3; i++){
        for (let j = 0 + y*3; j < 3 + y*3; j++){
          if (a[i][j] === 0) continue;
          if (hash[a[i][j]] in hash){
            console.log(i + ' ' + j + ' ' + a[i][j])
            return false;
          }
          hash[a[i][j]] = 1;
        }
      }
    }
  }
  return true;
}

console.log(checkSudoku(sudoku));