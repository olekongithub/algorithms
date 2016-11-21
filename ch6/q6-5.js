'use strict';

//remove duplicates from an array in O(n) time and O(1) space.

function removeDupes(a) {
  let currenti = 0;
  let lasti = 0;
  while (currenti < a.length) {
    //if current = last found then move current forward
    if (a[currenti] === a[lasti]){
      currenti++;
    }
    else{
      a[++lasti] = a[currenti];
    }
  }
  console.log('current is ' + lasti);
  return a;
}

console.log(removeDupes([1,1,2,2,4,4,4,4,5,6,7]));