/* Problem 178

Difficulty: Hard
This problem was asked by Microsoft.

Implement 3 stacks using a single list:

class Stack:
    def __init__(self):
        self.list = []

    def pop(self, stack_number):
        pass

    def push(self, item, stack_number):
        pass 
        
        */
        
        
        class TreeStack {
        	/*
           * Creating three stacks using single list
           * @param {number} [stackCapacity=3]
           */
           
           constructor(stackCapacity = 3) {
           	this.stackCapacity = stackCapacity;
            this.values = [];
            this.sizes = [0, 0, 0];
            this.numberOfStacks = 3;
           }
           
           /* 
           	* Pop top element off the stack (1 - 3)
            * @param {number} numStack
            * @return {number}
            * 
            */
            
            pop(numStack){
            	if(this.isEmpty(numStack)){
              	return null;
              }
              
              const topIndex = this.indexOfTop(numStack);
              const value = this.values[topIndex];
              this.values[topIndex] = 0; // Clearing out an element
              this.sizes[numStack]--; // Reducing the num elements in the stack
              return value;
            }
            
            
            /* Pushing elements into the stack
            	* @param {*} item
              * @param {number} numStack
              */
              push(item, numStack) {
              	if(this.isFull(numStack)){
                	return;
                }
                // Add one to the representive stack count
                this.sizes[numStack - 1]++;
                
                // Adding the value to the list
                this.values[this.indexOfTop(numStack)] = item;
              }
              
              /*
               * Index of the top element
               * @param {number} numStack
               * @return {number}
               */	
               
               indexOfTop(numStack){
               	const offset = numStack * this.stackCapacity; // Finding the starting point in the array
                const size = this.sizes[numStack - 1]; // The amount of elements that are in the stack
                return offset + size - 1;
               }
               
               /* Returning the stack capacity
               	* @return {number}
                */
                getStackCapacity(){
                	return this.stackCapacity;
                }
                
                /* Checking if the stack is full
                 * @param {number} numStack
                 * @return {boolean}
                 */
                 
                 isFull(numStack) {
                 	return this.sizes[numStack - 1] === this.stackCapacity;
                 }
           
               /* Checking if the stack is empty
                * @param {number} numStack
                * @return {boolean}
                */
                
                isEmpty(numStack){
                	return this.sizes[numStack - 1] === 0;
                }
           
        }
