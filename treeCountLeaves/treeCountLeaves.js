/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
  * Example usage:
  *   var root = new Tree();
  *   root.countLeaves(); // 1
  *   root.addChild(new Tree());
  *   root.countLeaves(); // still 1
  *   root.addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].children[0].addChild(new Tree());
  *   root.countLeaves(); // 3
  *
  */

/*
 * Basic tree that stores a value.
 */

 var Tree = function(value){
 	this.value = value;
 	this.children = [];
 };




 Tree.prototype.countLeaves = function (array) {
 	//count the index of 0
 	var counter = 0;
 	//select the big array
 	for(var i= 0; i<this.children[0]; i++){
    //select index 0 in array 
 	
       	 if(this.children[i]){
       	 	counter++
       	 	//return the func whith child
       	 }else{
       	 	this.countLeaves(this.children[0])
       	 }

 		

 	}
 return counter
 }


/**
  * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
  Tree.prototype.addChild = function(child){
   if(this.children[0]){

   }
     this.children.push(child)

  };

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
  Tree.prototype.isDescendant = function(child){

  };

/**
  * remove an immediate child
  */
  Tree.prototype.removeChild = function(child){
    
  };