/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:


You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
//or i have arecurgn i will do the for lop one time and chake theis conflects
*/
var plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]

// var dirReduc = function(directions){      //time Q = O(n)2
// 	var array = []
// 	for(var i = 0 ; i < directions.length ; i++){
// 		for(var j = 1 ; j<directions.length ; j++){
// 			if(directions[i] === 'NORTH' && directions[j]==='SOUTH' || 
// 				directions[i]=== 'EAST'&& directions[j]==='WEST'){

// 				directions.splice(directions[i],1)
// 				directions.splice(directions[j],1)
// 				}
// 			if(directions[i] === 'SOUTH' && directions[j]==='NORTH'||
// 				directions[i]=== 'WEST'&& directions[j]==='EAST')
// 			{
// 					directions.splice(directions[i],1)
// 					directions.splice(directions[j],1)
// 			}
// 		}
// 	}
// return directions;
// };
// //////////////////

var dirReduc = function(directions){
	var array = ["NORTH", "SOUTH", "EAST", "WEST"];
	// if (directions[0] === "NORTH") {
	// 	if(directions[directions.length-1] === "EAST" || directions[directions.length-1] === "WEST") {
	// 		directions = directions.splice(directions.length-1)
	// 		x.unshift("SOUTH")
	// 	}
	// }
	// if (directions[0] === "SOUTH") {
	// 	if(directions[directions.length-1] === "EAST" || directions[directions.length-1] === "WEST") {
	// 		directions = directions.splice(directions.length-1)
	// 		x.unshift("NORTH")
	// 	}
	// }
	// else if (directions[directions.length-1] === "SOUTH" ||  directions[directions.length-1] === "NORTH" ) {
	// 		directions = directions.splice(directions.length-1)
	// 	}
	if (directions[0] === directions[directions.length-1]){
		directions = directions.splice(-1)
		directions.pop()
	}
	directions = directions.splice(directions.length-1)
	return directions;
};
