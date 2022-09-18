// Problem 140
// This problem was asked by Google.

// Given a linked list, sort it in O(n log n) time and constant space.

// For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.

// Definition for a singly linked list
// function ListNode(val) {
// this.val = val;
// this.next = null
// }

// Sort Linked List in an ascending
// Time Complexity O(N log N)
// Space Complexity: O(1)
// @param  {ListNode} head
// @return {ListNode}
//

function sortLinkedList(head) {
// initial base case
if(head.next === null || head === null) return head;


  // retrieving the middle node
  const mid = getMidNode(head);
  const right = mid.next;
  mid.next = null;

  // sorting split sides and merge contents
  return merge(sortLinkedList(head), sortLinkedList(right));
}


 // Merge two linked lists
// @param  {ListNode} left
// @param  {ListNode} right
//  @return {ListNode}
 
function merge(left, right) {
  if (!left || !right) return left || right;

  if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  }
  right.next = merge(left, right.next);
  return left;
}


// Retrieving node previous to middle of a LinkedList
 // @param  {ListNode} head
 // @return {ListNode}
 
function getMidNode(head) {
  let prev = head;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  return prev;
}
