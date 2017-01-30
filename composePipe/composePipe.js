/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGTH to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'

 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 * 
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
  */

  'use strict';
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }

  var pipe = function(func1,func2){
	//i will dessayd the first input he is th number 
	//mack all the arg in array whithout firs elm
	//i need to eterrt on thes func and mack them whith the input
	//and the return is 
	var s; 
	var arg = Array.from(arguments)
	var integr = arg[0];
		arg = arg.splice(0,1);
	//var obj = {}
	//obj.arg = Array.from(arguments)
	// obj.integr = obj.arg[0]
		//obj.arg = obj.arg.splice(0,1)
	for(var i= 0; i< arg.length; i++){
       s = arg[i].apply(this, integr); 

	}
	return s
};
		//obj.integr = obj.arg[i](obj.integr)
   // return obj.integr

var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);

//==============================================================================

var greet = function(name){ return 'hello ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
//i thing it's the same sloution
var compose = function(){

};


var welcome = compose(greet, exclaim);