/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
	  	this.stack=[];
	  	this.count=0;

   // add an item to the top of the stack
   this.push = function(value){
   		this.stack[this.count]=(value)
   		this.count++
   	};

   // remove an item from the top of the stack
   this.pop = function(){
   		if(this.stack.length>0){
   			var temp = this.stack[--this.count]
   			this.stack.splice(this.count)
   		}
   return temp
	};

   // return the number of items in the stack
   this.size = function(){
   		return this.stack.length-1 || this.count
   		};
 };

 /**
   * Queue Class
   */
var Queue = function() {
   		// Use two `stack` instances to implement your `queue` Class
	   var inbox = new Stack();
	   var outbox = new Stack();

  		 // called to add an item to the `queue`
   this.enqueue = function(value){
     	/// use mothod frome stack push && cont ++
     	 inbox.push(value)
       		inbox.cont++
   		};

   	// called to remove an item from the `queue`
   this.dequeue = function(){
    	inbox.pop(inbox[inbox.cont-1])
    	console.log(inbox[inbox.cont-1])
    	outbox.cont++
    
     };

   	// should return the number of items in the queue
   this.size = function(){
  		return inbox.cont - outbox.cont
  	}
};