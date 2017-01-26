/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

 var binarySearch = function (array, target) {

 	 var middle = Math.floor(array.length/2);				// i will have some var here 

 	 if(target === middle){
 	 	return middle
 	};                            	// i whant to have new array from 0 to middl && to have from middl to end of array 
 									// i vwi to see if target is bigger or smaller than to mack the arr
 									//	i will eteret on the elment in the 
 									//i will chake if the elment = target i will return the length /
 		if(target < middle){
 			var first = array.slice(0,middle);
 			console.log(first)
 				for (var i = 0 ; i < first.length ; i++){
 					if(target === first[i]){
 					//	return some thing like indexOf(target)
 						return array.indexOf(first[i]) 
 					
 					}
 				}
 		};
 		if(target > middle){
 		var last = array.slice(middle,array.length);
 			for (var i = 0 ; i < last.length ; i++){
 				if(target === last[i]){
 					//	return some thing like indexOf(target)
 					return  array.indexOf(last[i]) 
 				}
 			}
 		}
};

