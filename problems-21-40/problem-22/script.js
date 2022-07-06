// Problem 22
//
// This problem was asked by Google.
//
// Given a singly linked list and an integer k, remove the kth last element from the list.
// k is guaranteed to be smaller than the length of the list.
//
// The list is very long, so making more than one pass is prohibitively expensive.
//
// Do this in constant space and in one pass.

class LinkedListNode{

// Initialize the start of a link list
constructor(val) {
    this.val = val;
    this.next = null;
}

}

// Remove the kth last element from the list
// {LinkedListNode} - head, {number} - k, return {LinkedListNode}
function findKthLast(head, k){

    let curr = head;
    let runner = head; // k is guaranteed to be smaller, so we can just move the runner
    let count = 0;
    // safety check
    while(count < k && runner !== null) {
        runner = runner.next;
        count++;
    }

    let prev = null;

    // moving both curr and runner
    while(runner !== null) {
        runner = runner.next;
        prev = curr;
        curr = curr.next;
    }
    if(prev === null) return head.next;
    prev.next = prev.next.next;
    return head;
}
