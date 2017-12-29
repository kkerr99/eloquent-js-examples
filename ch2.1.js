/* Working through the book (and all exercises) a second time */

// 2.1 Looping a triangle
var brick = "#";
var triangleBase = "";
for (var i = 0; i < 7; i++) {
  triangleBase = triangleBase + brick;
  console.log(triangleBase);
}

// 2.2 FizzBuzz

// 2.2a
/*
    Use console.log to print all the numbers from 1 to 100.
    For numbers divisible by 3, print "Fizz" instead of the number.
    For numbers divisible by 5 (and not 3), print "Buzz" instead.

    Tests

    1
    2
    3   Fizz
    4
    5   Buzz
    6   Fizz
    7
    8
    9   Fizz
    10  Buzz
    11
    12  Fizz
    15  Fizz

*/
var end = 16;
for (var i = 1; i < end; i++) {
  // Always print the counter
  console.log(i);
  // If the counter is evenly divisible by 3
  if ((i % 3) == 0) {
    console.log("Fizz");
    // The counter may also be divisible by 5; but this is all we want to do
    continue;
  }
  // If the counter is evenly divisible by 5
  else if ((i % 5) == 0) {
    console.log("Buzz");
  }
}


// 2.2b
/*
    Modify the program to print "FizzBuzz" for numbers that are
    divisible by both 3 and 5.

Tests

1
2
3   Fizz
4
5   Buzz
6   Fizz
7
8
9   Fizz
10  Buzz
11
12  Fizz
13
14
15  FizzBuzz

*/
var end = 16;
for (var i = 1; i < end; i++) {
  // Always print the counter
  console.log(i);
  // If the counter is evenly divisible by 3 and 5
  if ( ((i % 3)==0) && ((i % 5)==0) ) {
    console.log("FizzBuzz");
    continue;
  }
  // If the counter is evenly divisible only by 3
  else if ((i % 3) == 0) {
    console.log("Fizz");
  }
  // If the counter is evenly divisible only by 5
  else if ((i % 5) == 0) {
    console.log("Buzz");
  }
}


//  2.3 Chess Board

/*
    2.3b  Define a variable "size = 8" and change the program so that it works
    for any size, outputting a grid of the given width and height.
*/

// The width and height of the grid
var size = 2;
var string = "";
// Loop for every row
for (var x = 0; x < size; x++) {
  // Loop for column
  for (var y = 0; y < size; y++) {
    // If row is even
    if ( (x % 2) == 0) {
      // If column is even
      if ( (y % 2) == 0) {
        string += "#";
      }
      // If column is odd
      else {
        string += " ";
      }
    }
    // if row is odd
    else {
      // If column is even
      if ( (y % 2) == 0) {
        string += " ";
      }
      // If column is odd
      else {
        string += "#";
      }
    }
  }
  string += "\n";
}
console.log(string);
