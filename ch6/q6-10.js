'use strict';

//Compute the next permutation using dictionary ordering

let p1 = [0,1,2,3];
let p2 = [3,2,0,1];
let p3 = [4,8,7,5,6,3,2,1,0];

function addOne(p){
  let max = p.length - 1;
  let last = max;
  let numbers = [];
  let index;
  for (let i = max; i >= 0; i--){
    if (p[last] > p[i]) {
      //switch and order the rest and return
      for (let j = i+1; j <= max; j++){
        index = numbers.indexOf(j);
        if (index !== -1){
          // console.log(p);
          numbers[index] = p[i];
          p[i] = j;
          break;
        }
      }
      numbers.sort(function(a, b) {
        return a - b;
      });
      for (let x = i+1; x <= max; x++){
        p[x] = numbers[x-(i+1)];
      }
      return p;
    }
    else {
      numbers.push(p[i]);
      last = i;
      // console.log(numbers);
    }
  }
  return p;
}

// console.log(addOne(p1));
// console.log(addOne(p2));
console.log(addOne(p3));

