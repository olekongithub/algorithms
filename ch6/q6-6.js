'use strict';

//Find maximum profit from one sale of stock during a period of time

let prices = [310,315,275,295,260,270,290,230,255,250];

function findMaxProfit(a) {
  if (!a.length) return a.length;
  let min = a[0];
  let max_profit = 0;
  for (let i = 0; i < a.length; i++){
    if (a[i] < min){
      min = a[i];
    }
    if (a[i] > min){
      if (a[i] - min > max_profit){
        max_profit = a[i] - min;
      }
    }
  }
  return max_profit;
}

console.log(findMaxProfit(prices));