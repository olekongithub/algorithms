'use strict';

//Generate a random permutation for an array of n elements

let array = [2,4,5,6,22,64,32,1,19];

function genPerm(a){
  let max = a.length;
  let perm = [];
  let rand = Math.floor(Math.random() * max);
  for (let i = 0; i < max; i++){
    //use Object() here instead of indexOf for faster lookup
    while (perm.indexOf(rand) !== -1){
      rand = Math.floor(Math.random() * max);
    }
    perm.push(rand);
  }
  return perm;
}

console.log(genPerm(array));

//More efficient version that randomly chooses from a pre-existing array

function genPerm2(a){
  let max = a.length;
  let perm = [];
  for (let i = 0; i < max; i++){
    perm[i] = i;
  }
  for (let i = 0; i < max; i++){
    let rand = Math.floor(Math.random()*(max-i)+i);
    a[i] = a[rand];
  }
}

genPerm2(array);