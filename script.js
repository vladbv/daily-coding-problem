
 
// Problem 15
//
// This problem was asked by Facebook.
//
// Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.
//
// https://stackoverflow.com/questions/23351918/select-an-element-from-a-stream-with-uniform-distributed-probability

function useRandomizer(){
    let streamCount = 0;
    let selected;

    // Return a random number for any incoming stream
    function rand(stream){
        for(let i = 0; i < stream.length; i++){
        streamCount++;
            if(streamCount === 0) {
            selected = stream[i];
            }
            else if (Math.random() <= 1 / streamCount) {
            selected = stream[i];
            }
        }
        return selected;
    }
    return rand;

}
