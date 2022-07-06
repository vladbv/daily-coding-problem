// Problem 16
//
// This problem was asked by Twitter.
//
// You run an e-commerce website and want to record the last N order ids in a log.
//
// Implement a data structure to accomplish this, with the following API:
//
// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
// You should be as efficient with time and space as possible.

class Log {

    /* We create the Log, the blueprint first. It initialiazes circular buffer with size  */

    constructor(size) {
        this.size = size;
        this.logArr = [];
        this.currIndex = 0;
    }

    record(orderId) {
        this.logArr[this.currIndex] = orderId;
        this.currIndex = (this.currIndex + 1) % this.size;
    }

    // We get the last element

    getLast(i) {
    return this.logArr[(this.currIndex - i + this.size) % this.size];
    }
}
