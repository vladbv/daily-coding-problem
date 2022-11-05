/* Problem 196

This problem was asked by Square.

In front of you is a row of N coins, with values v1, v1, ..., vn.

You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row, removing it from the row, and receiving the value of the coin.

Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.

*/

/* Returning the last amount of money a user can win
 * @param {number[]} coins
 */
 
 function playCoinGame(coins){
 	const coinLength = coins.length;
  const game = new Array(coinLength)
  .fill(0)
  .map(() => Array(coinLength).fill(0));
  
  for(let interval = 0; interval < game.length; interval++){
  	for(let i = 0, j = interval; j < game.length; i++, j++){
    	// a = game[i + 2, j] - Player1 chooses i, Player2 chooses i + 1
      const a = i + 2 <= j ? game[i + 2][j] : 0;
      
      // b = game[i + 1, j - 1] - Player1 chooses i, Player2 chooses j OR
      // Alice chooses j, Bob chooses i
      
      const b = i + 1 <= j - 1 ? game[i + 1][j - 1] : 0
      
      // c = game[i, j - 2] - Player1 chooses j, Player2 chooses j - 1
      const c = i <= j - 2 ? game[i][j - 2] : 0;
      
      // choosing max play
      game[i][j] = Math.max(
      	coins[i] + Math.min(a, b),
        coins[j] + Math.min(b, c)
       );
    }
  }
  
  return game[0][game.length - 1];
 }
 
 let coins = [6, 9, 1, 5, 16, 8];
 console.log(playCoinGame(coins))
