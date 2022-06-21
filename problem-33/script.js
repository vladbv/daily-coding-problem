// Problem 33
// This problem was asked by Facebook.
//
// Given a function that generates perfectly random numbers between 1 and k (inclusive),
// where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.
//
// It should run in O(N) time.
//
// Hint: Make sure each one of the 52! permutations of the deck is equally likely.

// Shuffling a deck of cards represented as an array using only swaps
// @param {int[]} cards

function shuffle(cards) {
    for(let i = cards.length - 1; i >= 1; i--){
        const rand = random(i);
        swap(cards, i, rand);
    }
    return cards;
}

// Returning a random number between 0 and k (inclusive)

function random(k) {
return Math.floor(Math.random() * (k + 1));
}
//@param {int[]} arr
//@param {int} idx1
//@param {int} idx2

function swap(arr, idx1, idx2) {
const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
console.log(shuffle([2, 3, 5, 1, 10, 4, 6]))
