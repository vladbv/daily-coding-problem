// This problem was asked by Snapchat.
//
// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
// find the minimum number of rooms required.
//
// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

// Find the minimum number of rooms required based on the intervals of time

function minRooms(intervals) {
    const startingTimes = [];
    const endingTimes = [];

    for(let i = 0; i < intervals.length; i++){
        const [startTime, endTime] = intervals[i];

        startingTimes[i] = startTime;
        endingTimes[i] = endTime;

    }
    startingTimes.sort( (a, b) => a - b);
    endingTimes.sort( (a, b) => a - b);

    let sIdx = 0;
    let eIdx = 0;
    let maxRooms = 0;
    let currRooms = 0;
    while(sIdx < startingTimes.length || eIdx < endingTimes.length) {
        // No need to traverse through the ending times if all the starting times are used
        if(sIdx >= startingTimes.length) {
            break;
        }

        if(startingTimes[sIdx] < endingTimes[eIdx]){
            currRooms++;
            sIdx++;
        }   else{
            curRooms--;
            eIdx++;
        }
        maxRooms = Math.max(maxRooms, currRooms);
    }

    return maxRooms;
}

console.log(minRooms([[30, 75], [0, 50], [60, 150]]));
