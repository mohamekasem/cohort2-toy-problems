/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

var buildTriangle = function(numOfRows){
 var Triangle = [];

 for(var i= 0; i< numOfRows; i++){
 	for(var k=0; k< numOfRows; k++){

 	Triangle.push([1,i+k,1])

 	}
 	return Triangle
 }

//my prop can't mack array of array 
// 	var Triangle = [];
// 	//Triangle[0] = [1];
// 	//Triangle[Triangle.length-1] = 
// 	// while(numOfRows === 0)
// 	// Triangle.push(new Array()) 
// 	if(numOfRows === 1){
// 		Triangle.push([0])
// 	}
// 	if(numOfRows === 2){
// 	Triangle.push([1,1])
// 	}
// 	for(var i= 3; i<numOfRows; i++){
    
// 	}
// return Triangle
// }
		