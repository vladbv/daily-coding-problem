// Problem 145
// This problem was asked by Slack.

// You are given an N by M matrix of 0s and 1s. Starting from the top left corner, how many ways are there to reach the bottom right corner?

// You can only move right and down. 0 represents an empty space while 1 represents a wall you cannot walk through.

// For example, given the following matrix:

 /* [[0, 0, 1],
 [0, 0, 1],
 [1, 0, 0]] */
 
// Return 2, as there are only two ways to get to the bottom right:
// Right, down, down, right
// Down, right, down, right
// The top left corner and bottom right corner will always be 0.

// The number of ways we can get to the bottom right from the bottom left, while we cannot pass through a 1.
// @param {number[]} matrix
// @return {number}

function countNumPaths(matrix) {
	const m = matrix.length;
  const n = matrix[0].length;
  
  for(let i = 0; i < m; i++){
		for(let j = 0; j < n; j++){
    	if(matrix[i][j] === 1){
      	matrix[i][j] = 0;
      } else if(i === 0 && j === 0){
				matrix[0][0] = 1;
      } else {
      	matrix[i][j] = (i > 0 ? matrix[i - 1][j] : 0) + (j > 0 ? matrix[i][j - 1] : 0);
      }
    }
	}
  return matrix[m - 1][n - 1];
}

const matrix = [[0, 0, 1], [0, 0, 1], [1, 0, 0]];

console.log(countNumPaths(matrix))


