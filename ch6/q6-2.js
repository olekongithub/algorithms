'use strict';

//Increment a decimal number represented in an array.

let array1 = [1,4,9]
let array2 = [9,9,9]


function increment (array) {
  let index = array.length - 1;
  let addOne = false;
  for (index; index > -1; index--){
    if (array[index] === 9) {
      array[index] = 0;
    }
    else {
      array[index]++;
    }
    //end loop
    if (index === 0 && array[index] === 0){
      addOne = true;
    }
    if (array[index] !== 0) {
      break;
    }
  }
  if (addOne) {
    let newArray = [1];
    for (let i in array) {
      newArray.push(array[i]);
    }
    return newArray;
  }
  return array;
}

console.log( array1 + ', ' + increment(array1));
console.log( array2 + ', ' + increment(array2));
