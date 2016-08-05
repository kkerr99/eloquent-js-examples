// 4.1 The Sum of a Range

// 4.1.a Write a range function that takes two args, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
// Ex: console.log(range (1, 5));
// 1, 2, 3, 4, 5

function range(start, end) {
  var rangeValues = [];
  var value = start;
  for (var i = 0; i <= (end - start); i++) {
    rangeValues[i] = value;
    value ++;
  }
  return rangeValues;
}

// Test values
// console.log(range (3,6));
// 3, 4, 5, 6
// console.log(range (2,8));
// 2, 3, 4, 5, 6, 7, 8

// 4.1b Write a sum function that takes an array of numbers and returns the sum
// of these numbers. Run the previous program and see whether it returns 55.

// Test values
// console.log(sum(range (1, 5)));
// 15
// console.log(sum(range (3,6)));
// 18
// console.log(sum(range (2,8)));
// 35

function sum(array) {
  var arraySum = 0;
  for (var i = 0; i < array.length; i++) {
    arraySum = arraySum + array[i];
  }
  return arraySum;
}

// 4.1c Modify the range fn to take an optional third arg that indicates the
// step value used to build up the array. If no step is given, the array
// elements go up by increments of one, corresponding to the old behavior. The
// function call range(1,10, 2) should return [1, 3, 5, 7, 9]. Make sure it also
// works with negative step values so that range (5, 2, -1) produces
// [5, 4, 3, 2].

// Test values
//
// console.log(range (3,6));
// 3, 4, 5, 6
// console.log(range(1,10, 2));
// [1, 3, 5, 7, 9]
// console.log(range (5, 2, -1))
// [5, 4, 3, 2]
// console.log(range (4, 1))
// [4, 3, 2, 1]
// console.log(range (5, 2, 1))
// Error - Step value sign incorrect

function range(start, end, step) {
  var rangeValues = [];
  var value = start;
  var increment = 1;
  if (arguments[2] != null) { // Is there a step argument?
    if ( ((end - start) > 0) && (step < 0) ) // Range is ascending and step is non-negative
      return ("Error - Step value sign incorrect")
    else if ( ((end - start) < 0) && (step > 0) ) // Range is descending and step is positive
      return ("Error - Step value sign incorrect")
    else
      increment = step;
  }
  for (var i = 0; i <= (Math.abs(end - start) / increment); i++) {
    rangeValues[i] = value;
    value = value + increment;
  }
  return rangeValues;
}
