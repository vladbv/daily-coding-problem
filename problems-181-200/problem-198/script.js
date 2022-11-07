/* Problem 198 

This problem was asked by Goldman Sachs.

You are given N identical eggs and access to a building with k floors. Your task is to find the lowest floor that will cause an egg to break, if dropped from that floor. Once an egg breaks, it cannot be dropped again. If an egg breaks when dropped from the xth floor, you can assume it will also break when dropped from any floor greater than x.

Write an algorithm that finds the minimum number of trial drops it will take, in the worst case, to identify this floor.

For example, if N = 1 and k = 5, we will need to try dropping the egg at every floor, beginning with the first, until we reach the fifth floor, so our solution will be 5.

*/

/* Finding minimum number of trial drops in worst case
 * Time Complexity: O(nk^2)
 * Auxiliary Space: O(nk)
 * @param {number} N number of eggs
 * @param {number} K number of floors
 */
 
 function minEggDrop(N, K){
 	const eggFloor = new Array(N + 1).fill(0).map(() => Array(K + 1).fill(0))
  
  // 1st floor
  
  for(let i = 0; i <= N; i++){
  	eggFloor[i][1] = 1;
    
  }
  
  // We need j trials for one egg and j floors
  for(let j = 1; j <= K; j++) eggFloor[1][j] = j;
  
  // Rest of floors and eggs
  for(let i = 2; i <= N; i++){
  	   for (let j = 2; j <= K; j++) {
      eggFloor[i][j] = Number.MAX_VALUE;
      for (let x = 1; x <= j; x++) {
        const res = 1 + Math.max(eggFloor[i - 1][x - 1], eggFloor[i][j - x]);
        if (res < eggFloor[i][j]) eggFloor[i][j] = res;
      }
    }
  }
  
  return eggFloor[N][K]
 }
 
 console.log(minEggDrop(1, 5))
