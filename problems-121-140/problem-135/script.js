// Problem 135
// This problem was asked by Snapchat.

// Given a string of digits, generate all possible valid IP address combinations.

// IP addresses must follow the format A.B.C.D, where A, B, C, and D are numbers between 0 and 255. Zero-prefixed numbers, such as 01 and 065, are not allowed, except for 0 itself.

// For example, given 2542540123, you should return ['254.25.40.123', '254.254.0.123'].

function formatIPAddresses(num){
	let res = [];
  const acc = [];

	const dfs = (arr, s) => {
  	const prev = arr[arr.length - 1];
    if(prev > 255) return false;
		if(arr.length < 4 && s === '') return false;
    if(prev && prev.length > 1 && prev[0] === '0') return false;
    
    if(arr.length === 3) {
    	if(s > 255 || (s.length > 1 && s[0] === '0')) return false;
      
      res.push([...arr, s].join('.'));
      return true;
    }
    for(let i = 1; i < 4; i++){
    	dfs([...arr, s.slice(0, i)], s.slice(i));
    }
return true;
};
dfs(acc, num);
return res;
}

console.log(formatIPAddresses('2542540123'))
