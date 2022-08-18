// Problem 92

// Given head of linked list, swap every two nodes
// @param {LinkedList} head
// @return {LinkedList}

function swapLLNodes(head){
	let temp = head;

	while (temp !== null && temp.next !== null){
		// Swap elements
		const k = temp.data;
		temp.data = temp.next.data;
		temp.next.data = k;
		temp = temp.next.next;
	}
	return head;
}
