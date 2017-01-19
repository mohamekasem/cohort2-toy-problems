/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
//this.value = ???
 this.head = null ;
 this.tail = null ;
};

LinkedList.prototype.addToTail = function(value){ //time QM    BIG O(1)
 	if(this.head === null){
		 this.head= Node(value)
		 this.tail= Node(value)
  	}else{
  		this.tail.value=Node(value)
  	}
};

LinkedList.prototype.contains = function(value){  //time QM
	//we shuld to chake on the value 
  	if(this ){ ///????
  		return true
		}
	return false
};


LinkedList.prototype.removeHead = function(){  //time QM
 if(this){  //????

 }else{
 	this.removeHead()
 }
}


function Node (value){
   return {
	value : value,
	next :null
  }
}