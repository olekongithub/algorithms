'use strict';

// function countBits(number) {
//   var bits = 0;
//   while (number) {
//     bits += number & 1;
//     number >>= 1;
//     console.log(number);
//   }
//   console.log('Answer: ' + bits);
// }

// countBits(1);
// countBits(15);
// countBits(1023);
// countBits(2048);


function computeParity(number) {
  let parity = 0;
  while ( number ) {
    parity ^= (number & 1);
    number >>= 1;
  }
  return parity;
}

console.log('parity of number is ' + computeParity(7));