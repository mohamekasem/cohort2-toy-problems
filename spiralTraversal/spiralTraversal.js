/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
    */
    var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ]
    var spiralTraversal = function(matrix){
    	var array = []
    	array.push(JSON.stringify(matrix[0]).split('[').join('').split(']').join(''))
  											  //matrix=matrix.splice(0,1)
    for(var i = 1 ; i < matrix.length ; i++){
												//for(var j = 0 ; j < matrix[i].length ; j++)
		//array.push(matrix[i][matrix[i].length-1])
												//matrix = JSON.stringify(matrix)
												//matrix = matrix.split('[').join('').split(']').join('').split(',').join('');
												//return matrix
												//}
}
return array
};