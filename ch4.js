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
