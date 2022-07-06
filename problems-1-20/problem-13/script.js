// This problem was asked by Amazon.
//
// Given an integer k and a string s,
// find the length of the longest substring that contains at most k distinct characters.
//
// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

// Return the longest substring that contains the most k distinct characters

function kLongestSubstring(string, k){
    let l = 0;
    let r = 0;
    const charCount = new Map();
    let longestSubstring = '';

    while (r < string.length) {
    const char = string.charAt(r);
    
    // update count
    if(charCount.has(char)){
        charCount.set(char, charCount.get(char) + 1);
    } else {
        charCount.set(char, 1);
    }
    
    // size of the char count is equal to k
    // start moving left pointer until the window substring has the  most distinct k characters
    if (charCount.size > k) {
        while(charCount.size > k && l < r) {
        const leftChar = string.charAt(l);
        const count = charCount.get(leftChar);

        if(count === 1){
        charCount.delete(leftChar);
        }
        if(charCount.size > k){
        while(charCount.size > k && l < r){
            const leftChar = string.charAt(l);
            const count = charCount.get(leftChar);

            if (count === 1){
            charCount.delete(leftChar);
            } else {
            charCount.set(leftChar, count - 1);
               l++;
            }
        }
        }
            const substring = string.substring(l, r + 1);
            longestSubstring = substring.length > longestSubstring.length ? substring : longestSubstring;
            r++;
        }

    }

    }
    return longestSubstring;
}
