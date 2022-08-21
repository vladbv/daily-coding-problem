// Problem 95
// This problem was asked by Microsoft.
// Implement the singleton pattern with a twist. First, instead of storing one instance, store two instances.
// And in every even call of getInstance(), return the first instance and in every odd call of getInstance(), return the second instance.

// Implementing singleton pattern and defining the methods to return the first and the second instance
const Singleton = (function(){
let instance1;
let instance2;
let count = 0;

function createInstance() {
	const object = {};
  return object;
}
return {
	getInstance() {
  	if(!instance1) instance1 = createInstance();
    if(!instance2) instance2 = createInstance();
    
    // Switches instance based on even / odd calls
    count += 1;
    return count % 2 === 0 ? instance1 : instance2;
  }
}

})();

function run(){
	const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  
  console.log(`The same instance(?) - ${instance1 === instance2}`)
}  
