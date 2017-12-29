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
    2.3a  Write a program that creates a string that represents an 8x8 grid,
          using newline characters to separate lines.

          At each position of the grid there is either a space or a "#"
          character. The characters should form a chess board.
*/

var string = "";
// Loop for every row
for (var x = 0; x < 8; x++) {
  // Loop for column
  for (var y = 0; y < 8; y++) {
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
