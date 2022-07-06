// Problem 35
// This problem was asked by Facebook.
//
// Given a array of numbers representing the stock prices of a company in chronological order,
// write a function that calculates the maximum profit you could have made from buying and selling that stock once.
// You must buy before you can sell it.
//
// For example, given [9, 11, 8, 5, 7, 10], you should return 5,
// since you could buy the stock at 5 dollars and sell it at 10 dollars.
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

function getMaxProfit(listp){
    if(listp.length === 0) return 0;
    let min = listp[0];
    let profit = 0;
    for(let i = 0; i < listp.length; i++){
        const price = listp[i];
        profit = Math.max(profit, price - min);
        min = Math.min(min, price);
    }
    return profit;
// Another method for returning the profit is by using the reduce() method on the array
}
