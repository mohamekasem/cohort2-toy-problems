/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

//   var deepEquals = function(obj1, obj2){
//     return  JSON.stringify(obj1) === JSON.stringify(obj2) 
// }
var deepEquals = function(obj1, obj2){
//     var x ,
var c = 0;
var keysOfObj1 = Object.keys(obj1)
//     ////i whant to chak on the keys and value if they are tha same 
   
   for(var key in obj1){           ////o(n)2
// //       x=true
// //     ///comper btueen the keys in obj 1&&bog 2
// //     ///then i 
// //      c = 0
      for(var k in obj2){

        if(key === k && chake(obj1[k]) === chake(obj2[k])){
        
          c++
// //        
                      }    
        
                       }
//    x = x || c= Object.keys(obj1).length ; 
                        }
if (c === keysOfObj1.length){
      return true
                  }
                    else {
                              return false
                                            }
//   return x
                                                  } 
///or i will tray to mack the key && val
// var valueOfObj1= Object.value(obj)
//obj1.reduce()
//}

function chake (obj1,obj2){
   var x =0

   var obV=Object.values(obj1).length

    for(var k in obj1){

       for(var v in obj2){
       
         if(obj1[k] === obj2[v]){
           x++

           }

       }

    }

    if(x === obV){
       return true
    }else{
            return false
           }
}
