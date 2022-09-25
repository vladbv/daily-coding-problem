// Problem 152
/* This problem was asked by Alibaba.

Given an even number (greater than 2), return two prime numbers whose sum will be equal to the given number.

A solution will always exist. See Goldbach’s conjecture.

Example:

Input: 4
Output: 2 + 2 = 4
If there are more than one solution possible, return the lexicographically smaller solution.

If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then

[a, b] < [c, d] If a < c OR a==c AND b < d. */

//  Returning two prime numbers whose sum will be equal to the given number


// Generating all prime numbers less than n
// @param {number} n
// @param {boolean} isPrime

function sieveOfE(n, isPrime){
	// Initializing all entries of a boolean array
  // as true. A value in isPrime[i]
  // will finally be false if i is not a
  // prime, otherwise isPrime[n + 1] will be ture
  
  isPrime[0] = isPrime[1] = false;
  for(let i = 2; i <= n; i++)
  	isPrime[i] = true;
    
 
 for(let p = 2; p * p <= n; p++){
	// If isPrime[p] is not changed,
  // then it is a prime
  if(isPrime[p] == true){
		// Updating all multiples of p
    for(let i = p * p; i <= n; i += p){
			isPrime[i] = false;
  	}
  }
}
    return false;

}

// Printing a prime pair with a given sum

function findPrimePair(n){
	// Generating primes by using Sieve
	let isPrime = new Array(n + 1);
  for(let i = 0; i < n + 1; i++){
  	isPrime[i] = false;
  }
  sieveOfE(n, isPrime);
  
  // Traversing all numbers, to find the first pair
  for(let i = 0; i < n; i++){
		if(isPrime[i] && isPrime[n - i]){
			return (i + ' ' + (n - i))
  	}
  }
}

let n = 36;
console.log(findPrimePair(n))
