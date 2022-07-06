// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
//
// Given this implementation of cons:
//
// function cons(a, b) {
//   function pair(cb) {
//     return cb(a, b);
//   }
//   return pair;
// }
//
// Implement car and cdr.
//
// We can implement car and cdr methods by the same implementation of cons

function cons(a, b){
function pair(cb){
return cb(a, b);
}
return pair;

}

// The first element of the pair
function car(pairPar){
// You can use  eslint-disable-next-line, if you are using eslint
    function runCarFunction(a, b){
        return a;
    }

    return pairPar(runCarFunction);
}

// The second element of the pair

function cdr(pairPar){

function runCdrFunction(a, b){
    return b;
}

return pairPar(runCdrFunction);

}

