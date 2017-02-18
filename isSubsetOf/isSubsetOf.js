/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
<<<<<<< HEAD
 */
=======
*/
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
<<<<<<< HEAD
 */

//  Array.prototype.isSubsetOf = function (arr) {
// 											//i whant to know how is the sup;
// 											//i will have avariable to inclod the variable whith no duplc;
// 											//mack som forloob to delet the duplicates
//  var array = [];
// 											  // if(Array.prototype.length > arr){
// 											  //i have proplem to how to get the elment from the array.pro;
// 											  // }
//  										 	  //console.log(Array.prototype)
//  var arrObj = Object.getOwnPropertyNames(Array.prototype);
//  	for( var Key in arrObj ) {
//      console.log(arrObj[Key],Key);
//     }
//     for(var i= 0; i< Array.prototype.length; i++){
//   	 if(array.indexOf(Array.prototype[i])=== -1){
//   		array.push(Array.prototype[i])
//   		console.log(array)
//   	  }
//     }
//     for(var k = 0; k<array.length; k++){
//   	 if(arr.in(array[k])){
//   		return true;
//   	 }
//     }
//   return false;
// }
//not my solve
Array.prototype.isSubsetOf = function (arr) {
  var counter = 0;
  for (var i = 0; i < this.length; i++) {
      if (arr.includes(this[i])) {
        counter++;
      }
    }
    if (counter === this.length) {
      return true;
    }
  return false;
=======
*/

Array.prototype.isSubsetOf = function (arr) {

>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
}