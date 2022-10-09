/* Problem 170

This problem was asked by Microsoft.

Given an array of positive integers, divide the array into two subsets such that the difference between the sum of the subsets is as small as possible.

For example, given [5, 10, 15, 20, 25], return the sets {10, 25} and {5, 15, 20}, which has a difference of 5, which is the smallest possible difference.

*/

/* Recursive solution */

/* Javascript code to partition a set into two subsets, so that the difference of subset sums is minimum */

// Function to find the minimum sum

function findMinS(arr, i, sumCalculated, sumTotal){

	/* If we reached the last element,
   the sum of one subset is sumCalculated,
   the sum of the other subset is:
   sumTotal - sumCalculated
   Return the absolute difference of the two sums
   */
   if(i == 0){
   	return Math.abs((sumTotal - sumCalculated) - sumCalculated);
   }   
     /* For every item arr[i], we have two choices:
    To not include it in the first set
    To include it in the first set
    and then we return minimum two choices
    */
   return Math.min(findMinS(arr, i - 1, sumCalculated + arr[i - 1], sumTotal),
   findMinS(arr, i - 1, 
   sumCalculated, sumTotal
   )
   );
	
}

function findMin(arr, n){
	// Computing the total sum of elements
  let sumTotal = 0;
  for(let i = 0; i < n; i++){
		sumTotal += arr[i];
    
    // Computing the result using the recursive function
	}
      return findMinS(arr, n, 0, sumTotal);

}

let arr = [3, 1, 4, 2, 2, 1];
let n = arr.length;
console.log('The minimum difference' + ' between two sets is ' + findMin(arr, n))
