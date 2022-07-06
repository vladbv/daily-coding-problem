// Problem 20
// This problem was asked by Microsoft.
//
// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list.
// If there is more than one possible reconstruction, return any of them.
// If there is no possible reconstruction, then return null.
//
// For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].
//
// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond'] or ['bedbath', 'and', 'beyond'].

// Return a possible reconstruction of a string with a word set

function wordBreak(string, words){

    const wordSet = new Set(words);

    // const wordSplit = wordBreakTopDown(string, wordSet, 0);
    const wordSplit = wordBreakDP(string, wordSet);
    return wordSplit.length === 0 ? null : wordSplit;

}

// Top Down Recursive Solution

function wordBreakTopDown(string, wordSet, low){
    const result = [];
    let prefix = '';
    for (let i = low; i < string.length; i++){
        //finding a prefix that is in the wordset
        prefix += string.charAt(i);
        if(wordSet.has(prefix)){
            const wordBreakAfterPrefix = wordBreakTopDown(string, wordSet, i + 1);
            if (wordBreakAfterPrefix.length !== 0) {
            return [prefix, ...wordBreakAfterPrefix];
            }
        }
    }
    if(wordSet.has(prefix)) {
    result.push(prefix);
    }
    return result;
}

// Bottom-up solution by using a DP Table

function wordBreakDP(string, wordSet) {

    // -1 indicates between i and j cannot be split
    const dp = [...Array(string.length)].map( () => Array(string.length).fill(-1);

    // loop through each substring length
    for(let wordLength = 1; wordlLength <= string.length; wordLength++){
        for(let i = 0; i < string.length - wordLength + 1; i++){
            const end = i + wordLength - 1;
            const substring = string.substring(i, end + 1);

            // if the substring is in the wordset, we do not need to break up the word
            // We now put where the index of the last word begins
            if(wordSet.has(substring)){
                dp[i][end] = i;
            } else{
                // break up the substring
                for(let j = i + 1; j <= end; j++){
                    if(dp[i][j - 1] !== -1 && dp[j][end] !== -1){
                        dp[i][end] = j;
                        break;
                    }
                }
            }
      }
    }
        const result = [];
        if (dp[0][string.length - 1] === -1) return result;

        let i = 0;
        const j = string.length - 1;
        while(i < j) {
            const index = dp[i][j];
            if(i === index){
            result.push(string.substring(i, j + 1));
            break;
            }
            result.push(string.substring(i, index));
            i = index;
        }
    return result;
}
