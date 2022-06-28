// Problem 41
// This problem was asked by Google.
//
// Given the head of a singly linked list, reverse it in-place.
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the linked list

function reversedLinkedList(head) {
    // return reversedLinkedListRecursive(head);
    return reversedLinkedListIterative(head);
}

function reverseLinkedListIterative(head) {
    let newHead = null;
    while(head !== null){
        const { next } = head;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
}

function reverseLinkedListRecursive(head) {
    return reverseLinkedListHelper(head, null);
}

function reverseLinkedListHelper(head, newHead) {
    if(head === null) return newHead;
    const {next} = head;
    head.next = newHead;
    return reverseLinkedListHelper(next, head);
}
