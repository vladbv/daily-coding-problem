// Problem 27
// This problem was asked by Google.
//
// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
//
// Do this in linear time and in-place.
//
// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

// We will now segregate the values, so that the R's, come first, G's second and the B's last.
// @param {string[]} colors

function segColors(colors){
    let low = 0; // The index of where 'R' should be replaced
    let high = color.length - 1; // index of where 'B' should be replaced;
    let curr = 0;

    while (curr <= high) {
    if(colors[curr] === 'R'){
        swap(colors, curr, low);
        low++;
        curr++;
     else if (colors[curr] === 'B') {
        swap(colors, curr, high);
        high--;
    } else{
        curr++;
        } 
     }
   }
}
    function swap(colors, idx1, idx2){
        const temp = colors[idx1];
        colors[idx1] = colors[idx2];
        colors[idx2] = temp;
    }


