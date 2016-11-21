'use strict';

//Choose k random entries from an array

let array = ['hat', 'vat', 'cat', 'dat', 'lat', 'mat', 'chat'];

function chooseElements(a, k){
  let rand = -1;
  for (let i=0; i<k; i++){
    while (rand < i){
      rand = Math.floor(Math.random() * a.length);
      console.log(rand);
    }
    let temp = a[i];
    a[i] = a[rand];
    a[rand] = temp;
    rand = -1;
  }
  return a;
}

console.log(array);
console.log(chooseElements(array, 3));
