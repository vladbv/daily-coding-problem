// Problem 70
//
// This problem was asked by Square.
//
// Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.
//
// Write a function to simulate an unbiased coin toss.

// Returning 0 or 1 with a probability of 0.65 - 0.35
// @returning {int}

function tossBiased() {
    const rand = Math.random();
    return rand < 0.65 ? 0 : 1;
}

// Simulating Unbiased coin toss. Returning 0 or 1

function unBiasedToss() {
    let toss1;
    let toss2;
    do{
       toss1 = tossBiased();
       toss2 = tossBiased();
    } while (toss1 !== toss2);
    return toss1;
}
