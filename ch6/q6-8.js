'use strict';

//All primes to n, time = O(n^3/2)

function allPrimesToN(n){
  let result = [];
  let x = 2;
  while (x <= n){
    let prime = true;
    for (let i = 2; i <= Math.sqrt(x); i++){
      if( x % i === 0) prime = false;
    }
    if (prime) result.push(x);
    x++;
  }
  return result;
}

console.log(allPrimesToN(50));

//Use sieving for more efficient array generation, time = O(n log log n)

function allPrimesToNArray(n){
  let prime_bool = new Array(n).fill(true);
  let primes = [];
  prime_bool[0] = prime_bool[1] = false;
  for(let x = 2; x < n; x++){
    if (prime_bool[x]){
      primes.push(x);
      for (let j = x; j < n; j += x){
        prime_bool[j] = false;
      }
    }
  }
  return primes;
}

console.log(allPrimesToNArray(50));