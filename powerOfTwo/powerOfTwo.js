/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
															///
  var array = Math.pow(2,num).toString().split("");
  															// for(var i = 0 ; i < array.length ; i++){
  															// 	if(typeof (JSON.parse(array[i])) !== 'number'){
  															// 		array.supstr(i,1)
  															// 	}
 															 // }
    return array.reduce(function(acc,str){   		///time QM O(n)
		   														
		   												 	//	console.log(str)
		     												//proplem to delet e whin the input 1000
		    												//if(typeof (JSON.parse(str)) === 'number'){
		    	return acc+= parseInt(str)
  															//}
    },0)
};


/// hasan slution
//O(n^n)
// var powerOfTwo = function(num){
// 	debugger;
// 	if(num<=69){
// 		var temp = Math.pow(2,num).toString().split("");
// 		return temp.reduce(function(a,b){
// 			return Number(a)+ Number(b);
// 		},0);
// 	}
// 	else
// 		return powerOfTwo(num-69) +Math.pow(2,69).toString().split('').reduce(function(a,b){
// 			return Number(a) + Number(b);
// 		},0) ;  
// }