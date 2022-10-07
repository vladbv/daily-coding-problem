/* Problem 168

This problem was asked by Palantir.

Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly 
*/

function justifyText(wordList, k){

	const justifiedList = [];
  let currLength = -1;
  let currWords = [];
  
  for(let i = 0; i < wordList.length; i++)
	{
  	const word = wordList[i];
    if(currLength + word.length + 1 > k){
    // Adding justification line
    const justifiedLine = justify(currWords, currLength, k);
    justifiedList.push(justifiedLine);
    
    // resetting values
    currLength = -1;
    currWords = [];
    
    }
    currLength += word.length + 1;
    currWords.push(word)
  }
  
  // Last check
  if(currWords.length > 0){
		const justifiedLine = justify(currWords, currLength, k); 
    justifiedList.push(justifiedLine)
    }
    return justifiedList;
}

/* 	Returning justified line based on the current words, the current length, and the max length of the line
* @param {string[]} currWords
* @param {number} currLength
* @param {number} k
* @return {string}
*/

function justify(currWords, currLength, k){
const spacesToAdd = k - currLength;
const guaranteedSpaces = 1 + Math.floor(spacesToAdd / (currWords.length - 1));
const bonusSpaceRecipients = spacesToAdd % (currWords.length - 1);

let line = '';
// do not include the last word

for(let i = 0; i < currWords.length; i++){
	const word = currWords[i];
  line += word;
  
  for(let j = 0; j < guaranteedSpaces; j++){
		line += ' ';
  }
  if(i < bonusSpaceRecipients) line += ' ';
}

line += currWords[currWords.length - 1]; // adding the last word

return line;

}
console.log(justifyText(["the", "quick", "brown", "fox", "jumps",
                     "over", "the", "lazy", "dog"], 16));
