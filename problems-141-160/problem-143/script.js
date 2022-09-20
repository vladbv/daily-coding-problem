// Problem 143
// This problem was asked by Two Sigma.

// Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.

// The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.

// The second game: same, except that the stopping condition is a five followed by a five.

// Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.


// It will not matter what game Alice chooses to play, because her probability of rolling die1 and
// landing 5 is independent from whether she lands 5 or 6 on die2

// We stop rolling once we get a five followed by a six
// @return {number} count of rolls / dues

function rollGame1(){
	let count = 0;
  let die1;
  let die2;
  while(die1 !== 5 && die2 !== 6){
  die1 = Math.floor(1 + Math.random() * 6);
  die2 = Math.floor(1 + Math.random * 6)
  // Increasing count while doing that
  count += 1;
  }
  return count;
}


// Stopping the rolling once we get a five followed by a five

function rollGame2(){
	let count = 0;
  let die1;
  let die2;
  
  while(die1 !== 5 && die2 !== 5){
  
  die1 = Math.floor(1 + Math.random() * 6)
  die2 = Math.floor(1 + Math.random() * 6);
  
  // Increasing the count while doing that;
  count += 1;
  }
  return count;
}

console.log(rollGame1());
console.log(rollGame2());
