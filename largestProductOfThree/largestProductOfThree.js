/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

 var largestProductOfThree = function(array) {
 	//var arr = []
 	array.sort(function(a,b){
    return	b-a
 	})
 	var x = array[0]*array[1]*array[2]
 //	var y = 
 	return	 Math.max(x) //i will have anothur prametur he will be negative	
 	//return	x
 }
 // 	for(var i= 0;i< array.length; i++){
 // 		//for(var j= 1; j<array.length; j++){
 // 				arr.push(array[i]*array[i+1])
 // 				console.log(arr)
 			
 			

 // 		//}	
 // 	}
 // 	var max = arr[0];
 // 	for(var s= 0; s<arr.length; s++){
 // 		if(max>arr[s]){
 // 			max = arr[s]
 // 		}
 // 	}
 // 			return max;
 // }




