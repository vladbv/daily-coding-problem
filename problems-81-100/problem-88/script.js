// Problem 88
// This problem was asked by Google.
// On our special chessboard, two bishops attack each other if they share the same diagonal. This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.
// You are given N bishops, represented as (row, column) tuples on a M by M chessboard. Write a function to count the number of pairs of bishops that attack each other. The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).


let board = new Array(20).fill(0).map( () => new Array(20).fill(0) );

const countPairs = (N, bishops) => {
// Setting all the bits
// having bishop to 1
for(let i = 0; i < bishops.length; i++){
board[bishops[i][0]][bishops[i][1]] = 1;
}

// storing the final answer
let ans = 0;

// Loop to traverse the matrix
// diagonally in left direction
for (let s = 2; s <= 2 * N; s++){
// Stores count of bishop
// in the current diagonal
let cnt = 0;

	for(let i = 1, j = s - i; Math.max(i, j) <= Math.min(N, s- 1); i++, j--){
  	if(board[i][N - j + 1] == 1)
    cnt++;
  }
  
  if(cnt > 1)
  ans+= ((cnt + 1) * cnt) / 2;
}
return ans;

}


let N = 5;
let bishops = [[0, 0],
[1, 2],
[2, 2],
[4, 0]];

console.log(countPairs(N, bishops))
