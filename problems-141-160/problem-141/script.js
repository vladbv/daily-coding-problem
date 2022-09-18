// Problem 141
// This problem was asked by Amazon.

// Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

// For example, this matrix has 4 islands.
/* 
1 0 0 0 0
0 0 1 1 0
0 1 1 0 0
0 0 0 0 0
1 1 0 0 1
1 1 0 0 1
*/
// O(MN) Time Complexity
// O(P) Space Complexity
// M is the number or rows in the matrix, N is the number of columns in the matrix, P is the number of islands in the matrix

// Returning the number of islands in the matrix
// @param {number[][]} matrix
// @return {number}

function countNumIsland (matrix){
	return countIslandDFS(matrix)
}

// Finds count usind Depth First Search
// @param {number[][]} matrix
// @return {number}

function countIslandDFS(matrix) {
	let count = 0;
  for(let r = 0; r < matrix.length; r++){
		for(let c = 0; c < matrix[r].length; c++){
    	if(matrix[r][c] === 1){
	  islandCountHelper(matrix, r, c);
      }
    }
	}
}

// Depth first search helper function
// @param {number[][]} matrix
// @param {number} r
// @param {number} c
// @return {number}

function islandCountHelper(matrix, r, c) {
	if(r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length) return;
  if(matrix[r][c] === 0) return;
  
  // setting to visited
  matrix[r][c] = 0;
  islandCountHelper(matrix, r - 1, c);
  islandCountHelper(matrix, r + 1, c);
  islandCountHelper(matrix, r, c - 1);
  islandCountHelper(matrix, r, c + 1);
}
