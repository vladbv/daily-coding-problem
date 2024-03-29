// Problem 100

// This problem was asked by Uber.
// One way to unlock an Android phone is through a pattern of swipes across a 1-9 keypad.
// For a pattern to be valid, it must satisfy the following:
// All of its keys must be distinct.
// It must not connect two keys by jumping over a third key, unless that key has already been used.

// For example, 4 - 2 - 1 - 7 is a valid pattern, whereas 2 - 1 - 7 is not.

// Find the total number of valid unlock patterns of length N, where 1 <= N <= 9.


// Determination of total number of unlock patterns
// @param {number} n - 1 <= n <= 9
// @return {number}

function androidUnlock(n){

	if(n > 9 || n < 0) return 0;
  
  const skip = new Array(10).fill(0).map( () => new Array(10).fill(0)) // 10 because we count from 0
  
  const visited = new Array(10).fill(false);
  
  // assign skip values
  
  skip[1][3] = skip[3][1] = 2;
  skip[1][7] = skip[7][1] = 4;
  skip[3][9] = skip[9][3] = 6;
  skip[7][9] = skip[9][7] = 8;
  skip[1][9] = skip[9][1] = skip[2][8] = skip[8][2] = skip[3][7] = skip[7][3] = skip[4][6] = skip[6][4] = 5;
  
  return (
  	4 * (DFS(visited, skip, 1, n - 1) + DFS(visited, skip, 2, n - 1)) + DFS(visited, skip, 5, n - 1)
  );

}

function DFS(visited, skip, curr, remain){
if(remain < 0) return 0;
if(remain === 0) return 1;

visited[curr] = true;
let res = 0;

for(let i = 1; i <= 9; i++){
	if(!visited[i] && (skip[curr][i] === 0 || visited[skip[curr][i]]))
  res += DFS(visited, skip, i, remain - 1)
}
visited[curr] = false;

return res;

}

console.log(androidUnlock(8))
