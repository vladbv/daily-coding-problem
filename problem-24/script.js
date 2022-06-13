// Problem 24
// This problem was asked by Google.
//
// The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other.
// For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.
//
// Given two strings, compute the edit distance between them.


// Returning the minimum number of character insertions, deletions, substitutions

function editDistance(word1, word2){
    if(word1 === word2) return 0;
    if(word1.length === 0) return word2.length;
    if(word2.length === 0) return word1.length;

    const dp = [...Array(word1.length + 1)].map( () => Array(word2.length + 1 ));
    
    // fill the first row with 0 because empty string edit distance
    for (let c = 0; c < dp[0].length; c++){
        dp[0][c] = c;
    }
    // fill  the first column with 0 because of an empty string edit distance
    for (let r = 0; r < dp.length; r++) {
        dp[r][0] = r;
    }

    for(let r = 1; r < dp.length; r++){
        for (let c = 1; c < dp[0].length; c++){
            const word1Char = word1.charAt(r - 1);
            const word2Char = word2.charAt(c - 1);

            if(word1Char === word2Char) {
                dp[r][c] = dp[r - 1][c - 1];
            } else {
                const replaceEditDistance = dp[r - 1][c - 1];
                const deleteEditDistance = dp[r][c - 1];
                const insertEditDistance = dp[r - 1][c];

                dp[r][c] = Math.min(replaceEditDistance, deleteEditDistance, insertEditDistance) + 1;
            }
        }
    }

    return dp[word1.length][word2.length];

}
console.log(editDistance('kitten', 'sitting'))

