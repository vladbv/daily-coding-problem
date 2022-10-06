/* Problem 167

This problem was asked by Google.

Given an array of numbers and an index i, return the index of the nearest larger number of the number at index i, where distance is measured in array indices.

For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

If two distances to larger numbers are the equal, then return any one of them. If the array at i doesn't have a nearest larger integer, then return null.

Follow-up: If you can preprocess the array, can you do this in constant time?

*/

// Printing out the next greater elements in a given array

/* Printing element and NGE pair for all the elements of arr[] of size n */

/* @param {number[]} arr
 * @param {number} n
 * @return {number}

function printNGE(arr, n){
	var next, i, j;
  
  for(let i = 0; i < n; i ++) {
  	next = -1;
    for(let j = i + 1; j < n; j++){
    	if (arr[i] < arr[j]){
      	next = arr[j];
        break;
      }
    }
    document.write(arr[i] +  " -- " + next);
    document.write('<br>')
  }
}

var arr = [4, 1, 3, 5, 6];
var n = arr.length;
printNGE(arr, n)
