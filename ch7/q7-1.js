'use strict';

//turn integer string into integer without use of outside libraries

let int = '-123456';
let int2 = '123';

function translate(str){
  let result = 0;
  let neg = false;
  let start = 0;
  if (str[0] === '-'){
    neg = true;
    start = 1;
  }
  for (let i = start; i < str.length; i++){
    result *= 10;
    if (str[i] === '1'){
      result += 1;
    }
    if (str[i] === '2'){
      result += 2;
    }
    if (str[i] === '3'){
      result += 3;
    }
    if (str[i] === '4'){
      result += 4;
    }
    if (str[i] === '5'){
      result += 5;
    }
    if (str[i] === '6'){
      result += 6;
    }
    if (str[i] === '7'){
      result += 7;
    }
    if (str[i] === '8'){
      result += 8;
    }
    if (str[i] === '9'){
      result += 9;
    }
  }
  neg ? result *= -1 : null;
  return result;
}

console.log(translate(int));
console.log(translate(int2));
