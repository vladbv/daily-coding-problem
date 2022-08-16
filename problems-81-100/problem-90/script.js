// Problem 90
// This problem was asked by Epic.
// The "look and say" sequence is defined as follows: beginning with the term 1, each subsequent term visually describes the digits appearing in the previous term. The first few terms are as follows:
// 1
// 11
// 21
// 1211
// 111221
// As an example, the fourth term is 1211, since the third term consists of one 2 and one 1.
// Given an integer N, print the Nth term of this sequence.

// @param {number} n
// @return {number}

// Function to return the Nth term of this sequence, with the look and say sequence

function lookSay(n){
    let str = '1';

    while(n > 1) {
        let newStr = '';
        let count = 0;
        let say = str[0];   

        for(let i = 0; i < str.length; i++){
            if(str[i] === say) count += 1;
            else {
                newStr += count + say;
                count = 1;
                say = str[i];
            }
        }
        str = newStr + count + say;
        n -= 1;
    }
    return str;
}
