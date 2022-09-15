// Problem 133
// Given a list, sort it using this method: reverse(lst, i, j), which reverses lst from i to j.

// Reversing a list from i to j
// @param {number[]} list
// @param {number} i
// @param {number} j
// @return {number[]}

function reverse(list, i, j){

	// base case
  if(i < 0 || j < 0 || j <= i) return list;
  
  // obtain a copy of a reverse array splice
  
  const reverseList = [...list].splice(i, j - i + 1).reverse();
  
  // insert splice at index
  list.splice(i, j - i + 1, reverseList);
  
  // Returning a flattened array
  return list.flat();

}
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 8));
