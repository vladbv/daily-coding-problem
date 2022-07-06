// This problem was asked by Facebook.
//
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
// count the number of ways it can be decoded.
//
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
//
// You can assume that the messages are decodable. For example, '001' is not allowed.

function numDecodings(message){
	return numDecodingsC(message);

	// return numDecodingsR(message);
	// return numDecodingsRMemo(message);
	// return numDecodingsDP(message);
}

// Top Down Recursive Solution O(2^N)

function numDecodingsR(message){
	return message.length === 0 ? 0 : numDecodingsRHelper(message, 0);
}

// Top Down Recursive Helper function

function numDecodingsRHelper(message, index){
if (index === message.length) {
	return 1;
}
if(message.charAt(index) === '0'){
	return 0;
}

// Single number
let totalDecodings = numDecodingsRHelper(message, index + 1);
if (index < message.length - 1){
// Double Number
const doubleNum = parseInt(message.substring(index, index + 2), 10);

if(doubleNum >= 10 && doubleNum <= 26{
	totalDecodings += numDecodingsRHelper(message, index + 2);
}
}
return totalDecodings;
}

// Top Down Recursive Solution with Memoization
function numDecodingsRMemo(message){
return message.length === 0 ? 0 : numDecodingsRMemoHelper(message, 0, new Map());
}

// Top Down Recursive Helper function with Memoization
function numDecodingsRMemoHelper(message, index, memo) {
if(index === message.length){
return 1;
}
if(memo.has(index)){
return memo.get(index);
}
if(message.charAt(index) === '0'){
return 0;
}

let totalDecodings = numDecodingsRMemoHelper(message, index + 1, memo);
if(index < message.length - 1){
const doubleNum = parseInt(message.substring(index, index + 2), 10);
	if(doubleNum >= 10 && doubleNum <= 26){
totalDecodings += numDecodingsRHelper(message, index + 2);
	}
	memo.set(index, totalDecodings);
	return totalDecodings;
}

// Bottom up Solution using a dp table

function numDecodingsDP(message){
if(message.length === 0){
return 0;
}
if(message.length === 1){
return message !== '0' ? 1 : 0;
}

const dpTable = Array(message.length + 1).fill(0); // Fill an Array of message length + 1 with zeros
dpTable[0] = message.charAt(0) !== '0' ? 1 : 0;
dpTable[1] = message.charAt(0) !== '0' ? 1 : 0;

for(let i = 2; i <= message.length; i+=1){
	const singleNum = parseInt(message.substring(i - 1, i), 10);
	const doubleNum = parseInt(message.substring(i - 2, i), 10);
		if(singleNum >= 1 && singleNum <= 9){
		dpTable[i] += dpTable[i - 1];
		}
	if(doubleNum >= 10 && doubleNum <= 26){
dpTable[i] += dpTable[i - 2];
	}


}
return dpTable[dpTable.length - 1];
}
}
//Bottom up Solution Constant Space
function numsDecodingC(message){
if(message.length === 0){
return 0;
}
if(message.length === 1) return message !== '0' ? 1 : 0;
let prev = message.charAt(0) !== '0' ?	1 : 0;
let curr = message.charAt(0) !== '0' ?  1 : 0;

for(let i = 2; i <= message.length; i+=1){
const singleNum = parseInt(message.substring(i - 1, i), 10);
	const doubleNum = parseInt(message.substring(i - 2, i), 10);
	let total = 0;
	if(singleNum >= 1 && singleNum <= 9) total += curr;

	if(doubleNum >= 10 && doubleNum <= 26) total += prev;
	prev = curr;
	curr = total;
}
return curr;

}

