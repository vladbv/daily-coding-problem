// Problem 32
//
// This problem was asked by Amazon.
//
// Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.
//
// For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".

// O(N ^ 2) Time Complexity
// O(N ^ 2) Space Complexity
// N is the length of the string
// The best solution is O(N) Time and Space Complexity with Manacher's Algorithm

// Returning the longest palindromic contiguous substring
// @param {string} s
// @return {string}

function longPalindrome(s){
    if(s.length === 0) return null;

    const dp = [...Array(s.length)].map( () => Array(s.length).fill(false));
    let palStart = 0;
    let palLength = 1;

    // the single characters are palindromes
    for(let i = 0; i < s.length; i++){
        dp[i][i] = true;
    }

    // checking for two character palindromes
    for(let i = 0; i < s.length - 1; i++){
        if(s.charAt(i) === s.charAt(i + 1)) {
            dp[i][i + 1] = true;
            palStart = i;
            palLength = 2;
        }
    }

    for(let substringLength = 3; substringLength <= s.length; substringLength++){
        // going through all substrings of length substringLength
        for(let start = 0; start < s.length - substringLength + 1; start++){
            const end = start + substringLength - 1;

            if(s.charAt(start) === s.charAt(end) && dp[start + 1][end - 1]){
                dp[start][end] = true;
                palStart = start;
                palLength = substringLength;
            }
        }
    }
    return s.substring(palStart, palStart + palLength);     
}
