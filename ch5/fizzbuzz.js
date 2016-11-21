'use strict';

function fizzBuzz(array) {
  array.forEach(function(element){
    if (element % 5 === 0 && element % 3 === 0) {
      console.log('FIZZBUZZ');
    }
    else if (element % 5 === 0) {
      console.log('BUZZ');
    }
    else if (element % 3 === 0) {
      console.log('FIZZ');
    }
    else {
      console.log(element);
    }
  })
}

function startFizzBuzz(number) {
  var arr = [];
  for ( var x = 1; x <= number; x++ ){
    arr.push(x);
  }
  // console.log(arr);
  fizzBuzz(arr);
}

startFizzBuzz(100);