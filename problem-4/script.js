// This problem was asked by Google.
//
// An XOR linked list is a more memory efficient doubly linked list.
// Instead of each node holding next and prev fields, it holds a field named both,
// which is an XOR of the next node and the previous node.
//
// Implement an XOR linked list;
// it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.
//
// If using a language that has no pointers (such as Javascript),
// you can assume you have access to getPointer and dereferencePointer functions
// that converts between nodes and memory addresses.

class ListNode {

    constructor(val){
        this.val = val;
        this.both = null;
    }

}

// Let's assume null ^ value = value
// And let's assume null ^ null = null
// If the linked list has one node, ListNode.both is null

class XORLinkedList {
   /* Let's initialize the XOR Linked List */

    constructor() {
        this.root = null;
        this.tail = null;
    }
    
    /* Add a value to the end of the linked list */

    add(val){
        const node = new ListNode(val);
        if(this.root === null && this.tail === null){
            this.root = node;
            this.tail = node;
        } else {
            node.both = getPointer(this.tail); // set the previous memory address for node
            this.tail.both ^= getPointer(node); // update tail both
            this.tail = node; // Tail is now the new node
        }
    }

    /* We need to return the nod at index of this XOR Linked List */
    get(index) {
        if(index === 0){
          return this.root;
        }
        // index is greater than 0, it cannot traverse if root is null
        if(this.root === null){
            throw new Error('Not possible to traverse if root is null');
        }
        // The current and the previous holds memory location
        let curr = getPointer(this.root);
        let prev = null;
        let i = 0;

        // Let's assume null ^ value = value
        // The rules of XOR are:
        // X ^ X = 0
        // X ^ 0 = X
        // X ^ Y = Y ^ X
        // (X ^ Y) ^ Z = X ^ (Y ^ Z) 
        // curr hits null when the previous memory location and the current memory location is the same
        // same value ^ same value = 0, or null in this case
        while(curr !== null) {
        if(i === index) 
            break;

        // (curr ^ prev) ^ next = curr ^ (prev ^ next)
        // The XOR List node defined as prev ^ next = curr
        // To traverse:
        // prev ^ curr = next
        const next = prev ^ curr;
        prev = curr;
        curr = next;
        i++;
    }
    if(i !== index){
        throw new Error('Less nodes than index');
    }
    return dereferencePointer(curr);
    }
       
}

