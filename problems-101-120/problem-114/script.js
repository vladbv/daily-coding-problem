// Problem 114

// This problem was asked by Microsoft.

// You have n fair coins and you flip them all at the same time. Any that come up tails you set aside. The ones that come up heads you flip again. How many rounds do you expect to play before only one coin remains?

// Write a function that, given n, returns the number of rounds you'd expect to play until one coin remains.

// Determining the number of coins until one coin remains
// @param {number} coin
// @return {number}

function flipCoins(coins) {
	if(coins < 1) return null;
  if(coins === 1) return 1;
  
  return flipCoins(Math.floor(coins / 2)) + 1;
}

console.log(flipCoins(100))
