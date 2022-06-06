// Problem 18
// This problem was asked by Facebook.
//
// A builder is looking to build a row of N houses that can be of K different colors.
// He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.
//
// Given an N by K matrix where the nth row and kth column
// represents the cost to build the nth house with kth color,
// return the minimum cost which achieves this goal.

// Return the minimum cost of building N houses with K different colors, with no two neighboring houses being the same color

function minCostHouseColor(costs){
return minCostHouseColorBest(costs);
}

function minCostHouseColorInitial(costs){
if(costs.length === 0) {
    return 0;
}

const n = costs.length;
const k = costs[0].length;

// 2d array with n length and k rows
const dp = [...Array(n)].map( () => Array(k));

// filling the first row

for(let row = 1; row < n; row++){
    //Finding the lowest costs for each column in the row
    for( let col = 0; col < k; col++){
        dp[row][col] = Number.MAX_SAFE_INTEGER;

        for(let numCol = 0; numCol < k; numCol++){
        // we don't want the same column, as that is 2 houses of same color
          if(numCol !== col){
            dp[row][col] = Math.min (
                dp[row][col],
                dp[row - 1][numCol] + costs[row][col]
            );
          }
        }
    }
}

let minCost = Number.MAX_SAFE_INTEGER;
// get minimum of last row in dp table
for(let col = 0; col < k; col++){
minCost = Math.min(minCost, dp[n - 1][col]);
}

return minCost;
}

function minCostHouseColorSecondWay(costs) {
    if(costs.length === 0) {
        return 0;
    }
    const n = costs.length;
    const k = costs[0].length;

    const dp1 = []; // the last row
    const dp2 = []; // the current row

    // start the first row of costs, as the last row, build from the second row onwards
    for( let i = 0; i < k; i++){
        dp1[i] = costs[0][i];
    }

    for (let row = 1; row < n; row++){
        for (let j = 0; j < k; j++){
            // Finding the lowest costs for each column in this row
            dp2[j] = Number.MAX_SAFE_INTEGER;

            for(let m = 0; m < k; m++){
            if( m !== j){
            dp2[j] = Math.min(dp2[j], dp1[m] + costs[row][j]);
            }
            }
        }
    
    for(let j = 0; j < k; j++){
        dp1[j] = dp2[j];
    }

    }
    
    let minCost = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < k; i++){
    minCost = Math.min(minCost, dp1[i]);
    }
    return minCost;
}
