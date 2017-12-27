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
