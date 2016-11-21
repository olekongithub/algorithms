'use strict';

//Array contains all possible maximum moves forward, see if there is any path to the end of the array.

// function findPath(array){
//   let reachable = [0];
//   for (let i = 0; i < array.length; i++){
//     if (reachable.indexOf(i) !== -1){
//       for (let j = 1; j <= array[i]; j++) {
//         reachable.push(i+j);
//         if (array.length - 1 === i + j){
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

// findPath([1,3,1,0,3,2,1]);

function findPath(a) {
  let max_reach = 0;
  for (let i = 0; i <= max_reach && max_reach < a.length - 1; ++i){
    max_reach = Math.max(max_reach, a[i] + i);
  }
  return max_reach >= a.length - 1;
}

if (findPath([1,6,1,0,0,0,0,1])) console.log('Path found!');
else console.log('No path available.');

if (findPath([1,2,1,0,3,2,1])) console.log('Path found!');
else console.log('No path available.');

