/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) {
  let result = [];
  for(let i = 0; i < arr1.length; i++){
      if(arr2.includes(arr1[i])) result.push(arr1[i])
  }
  return result
}

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = intersect;
