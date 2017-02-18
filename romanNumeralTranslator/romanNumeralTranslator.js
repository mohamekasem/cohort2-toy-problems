
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

<<<<<<< HEAD
//  var chak = function(array){
//      var count = 0
//      for(var i = 0; i< array.length; i++){
//        if(array[i] >= array[i+1]){

//          count+=array[i];

//      }else if(array[i] < array[i+1] && array.length > 2 ||array[i] < array[i+1]){

//       return null;

//   }else if(array[i] < array[i+1]){

//       count = array[i+1] - array[i];
//   }
// }
// return count
// }
var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
       I: 1,
       V: 5,
       X: 10,
       L: 50,
       C: 100,
       D: 500,
       M: 1000
   };
   var array = romanNumeral.split("");
   var c = 0;

    for(var i = 0; i<array.length; i++){//[	X,X]//[]

    	//for(var key in DIGIT_VALUES){
    		

            if(DIGIT_VALUES[array[i]]<DIGIT_VALUES[array[i+1]]){
             c = c - DIGIT_VALUES[array[i]]

         }else if(DIGIT_VALUES[array[i]] >= DIGIT_VALUES[array[i+1]] || DIGIT_VALUES[array[i+1]] === undefined){
            c = c + DIGIT_VALUES[array[i]]
        }else if(!DIGIT_VALUES[array[i]]){
         return null
     }

     return c
 }
}
















=======
var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
