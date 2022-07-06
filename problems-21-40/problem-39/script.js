// Problem 39
// This problem was asked by Two Sigma.
//
// Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability,
// implement a function rand7() that returns an integer from 1 to 7 (inclusive).
//
//
// It is non deterministic, it can run forever
// O(1) Space complexity

// Returning an integer from 1 to five (inclusive) with uniform probability
// @return {int}

function rand5(){
return Math.floor(Math.random() * 5) + 1;
}

// Return an integer from 1 to 25 using rand5

function rand25(){
return 5 * (rand5() - 1) + (rand5() - 1);
}

// Returning an integer from 1 to 7 (inclusive) using rand5
// @return {int}        

function rand7(){
    let r = 21;
    while(r >= 21) r = rand25();
    return (r % 7) + 1;
}
