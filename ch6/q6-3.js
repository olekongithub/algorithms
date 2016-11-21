'use strict';

//multiply two decimal numbers represented in arrays

let m1 = [6, 2];
let m2 = [2];

function multiply(m1, m2) {
  let product = new Array(m1.length + m2.length).fill(0);
  for (let i = m1.length - 1; i > -1; i--){
    for (let j = m2.length - 1; j > -1; j--){
      product[i + j + 1] += m1[i] * m2[j];
      product[i + j] += Math.floor(product[i+j+1]/10);
      product[i + j + 1] = product[i + j + 1]%10;
    }
  }
  return product;
}

console.log(multiply(m1, m2));