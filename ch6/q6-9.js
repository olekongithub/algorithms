'use strict';

//Permute the elements of an array

let array = ['dog','cat','house','dark','cauldron','dance'];
let permutation = [2,5,1,3,0,4];

function applyPerm(a, p){
  let newa = new Array(a.length);
  for (let i in p){
    newa[p[i]] = a[i];
  }
  return newa;
}

console.log(applyPerm(array, permutation));

function swap(a, orig, dest){
  let temp = a[dest];
  a[dest] = a[orig];
  a[orig] = temp;
  return a;
}

//using permutation cycles, we can reduce space from O(n) to O(1)

function applyPermCycle(a, p){
  for (let i = 0; i < a.length; i++){
    let next = i;
    while (p[next] > -1){
      a = swap(a, i, p[next]);
      console.log(a);
      let temp = p[next];
      p[next] -= p.length;
      next = temp;
    }
  }
  return a;
}

console.log(applyPermCycle(array, permutation));