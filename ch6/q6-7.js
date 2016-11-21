'use strict';

//Buy and sell stock twice for maximum profit

let prices = [310,315,275,295,260,270,290,230,255,250];
let prices2 = [12,11,13,9,12,8,14,13,15];

function findMaxProfit(a) {
  if (!a.length) return a.length;
  let all_profits = new Array(a.length);
  //find maximum first buy and sell by that day
  let min = 0;
  let max_profit = 0;
  let first_profits = [];
  for (let i = 0; i < a.length; i++){
    if (a[i] < a[min]) min = i;
    let today_profit = a[i] - a[min];
    if (today_profit > max_profit) max_profit = today_profit;
    first_profits.push(max_profit);
  }
  console.log(first_profits);
  let max = a.length - 1;
  let second_profits = new Array(a.length);
  max_profit = 0;
  for (let j = a.length - 1; j >= 0; j--){
    if (a[j] > a[max]) max = j;
    let today_profit = a[max] - a[j];
    if (today_profit > max_profit) max_profit = today_profit;
    second_profits[j] = max_profit;
    all_profits[j] = first_profits[j-1] + second_profits[j];
  }
  all_profits[0] = 0;
  console.log(second_profits);
  console.log(all_profits);
  return Math.max(...all_profits);


}

console.log(findMaxProfit(prices));
console.log(findMaxProfit(prices2));
