/* Given a 2D board of characters and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example, given the following board:

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

exists(board, "ABCCED") returns true
exists(board, "SEE") returns true
exists(board, "ABCB") returns false
*/

// Checking if the word exists in the grid or not

let rows = 3;
let cols = 4;

/* starting from the first match in the grid
and we keep indexing until we match a pattern
x and y : the current position in the array */

function findMatch(mat, pat, x, y, nrow, ncol, level){

let l = pat.length;

// If the pattern matches
if(level == l) return true;

// Out of Boundary
     if (x < 0 || y < 0 || x >= nrow || y >= ncol)
            return false;
 

// If the grid matches with a letter, while there is a recursion

if(mat[x][y] == pat[level])
{
	// Marking the cell as visited
  let temp = mat[x][y];
  mat[x][y] = '#';
  
  // finding the subpattern in 4 directions
   let res =
            findMatch(mat, pat, x - 1, y, nrow, ncol, level + 1) |
            findMatch(mat, pat, x + 1, y, nrow, ncol, level + 1) |
            findMatch(mat, pat, x, y - 1, nrow, ncol, level + 1) |
            findMatch(mat, pat, x, y + 1, nrow, ncol, level + 1);
 
  
  // marking the cell as unvisited again
  mat[x][y] = temp;
  return res;
} else // Not matching
return false;

}

// Checking if the word exists in a grid

   function checkMatch(mat, pat, nrow, ncol){
   let l = pat.length;

// if total characters in matrix are less than the pattern length

if(l > nrow * ncol) return false;

// Traversing in the grid
for(let i = 0; i < nrow; i++){
	for(let j = 0; j < ncol; j++){
  	// If the first letter matches, then recur and check
    if(mat[i][j] == pat[0]) 
    	if(findMatch(mat, pat, i, j, nrow, ncol, 0))
      return true;
  }
}
return false;
}

let grid =   [['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']]
  
   if (checkMatch(grid, "SEE", rows, cols))
       console.log('Yes');
    else
          console.log("No");
