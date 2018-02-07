// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

/*
4. Write a JavaScript program to find the area of a triangle where lengths of
the three of its sides are 5, 6, 7.
*/
function triangleArea() {
  var a = 5;
  var b = 6;
  var c = 7;
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log("The area is: " + area);
}

triangleArea();

//https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
/*
1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/
function reverseNum1() {
  var forwardNumber = 32243;
  var forwardString = forwardNumber.toString();
  var reverseString = "";
  for (i = forwardString.length - 1; i >= 0; i--)
  {
    reverseString += forwardString[i];
  }
  var reverseNumber = Number(reverseString);
  console.log("Number: " + forwardNumber);
  console.log("Reversed number: " + reverseNumber);
}

reverseNum1();

/*
1. Rewrite reverseNum1 by reversing loop
Example x = 32243;
Expected Output : 34223
*/
function reverseNum2() {
  var forwardNumber = 32243;
  var forwardString = forwardNumber.toString();
  var reverseString = "";
  for (i = 0; i < forwardString.length; i++)
  {
    reverseString = forwardString[i] + reverseString;
  }
  var reverseNumber = Number(reverseString);
  console.log("Number: " + forwardNumber);
  console.log("Reversed number: " + reverseNumber);
}

reverseNum2();

/*
1. Rewrite reverseNum1 by using more elegant loop
Example x = 32243;
Expected Output : 34223
*/
function reverseNum3() {
  var forwardNumber = 32243;
  var forwardString = forwardNumber.toString();
  var reverseString = "";
  for (i = 0; i < forwardString.length; i++)
  {
    reverseString = forwardString[i] + reverseString;
  }
  var reverseNumber = Number(reverseString);
  console.log("Number: " + forwardNumber);
  console.log("Reversed number: " + reverseNumber);
}

reverseNum3();

/*
8. Write a JavaScript function that accepts a number as a parameter and check
whether the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that
has no positive divisors other than 1 and itself.

Test Suite

isPrime(1);   false
isPrime(-0.5);  false
isPrime(-3);  false
isPrime(3.4); false
isPrime(2);   true
isPrime(3);   true
isPrime(9);   false
isPrime(11);  true
isPrime(14);  false
isPrime(15);  false
isPrime(17);  true
*/
function isPrime(num) {
  // If num is not an integer or if num <= 1, it is not prime
  if ( (Math.round(num) != num) || (num <= 1) ) {
    return false;
  }
  // Else check if num has any positive divisors besides 1 and itself
  var positiveDivisor = true;
  for (i = 2; i < num; i++) {
    if ((num % i) == 0) {
      positiveDivisor = false;
      break;
    }
  }
  return positiveDivisor;
}

/*
24. Write a JavaScript function to apply Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking
sort, is a simple sorting algorithm that works by repeatedly stepping
through the list to be sorted, comparing each pair of adjacent items and
swapping them if they are in the wrong order".

Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
function bubbleSort(array) {
  var length = array.length;
  // Print unsorted array
  console.log("Unsorted: " + array);
  // Passes through array
  for (var i = 0; i < length-1; i++) {
    var x = 0;
    var y = 0;
    // Do adjacent pair swaps
    for (var j = 0; j < length - 1; j++)
    {
      x = array[j];
      y = array[j+1];
      // If x > y, swap array pair
      if (x > y) {
        arr[j] = y;
        arr[j+1] = x;
      }
    }
  }
  // Print array
  console.log("Sorted: " + array);
}

var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
bubbleSort(arr);

/*
2.2 FizzBuzz
Use console.log to print all the numbers from 1 to 100, with two exceptions.
1) For numbers divisible by 3, print "Fizz" instead of the number.
2) For numbers divisible by 5 (and not 3), print "Buzz" instead.
After you have that working, modify program to print "FizzBuzz" for numbers that
are divisible by both 3 and 5.

Test Suite

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
Fizz
*/

function fizzBuzz() {
  // Print all numbers from 1 to 100, with exceptions
  var MAX = 100;
  for (var i = 1; i <= MAX; i++) {
    // For numbers divisible by 3, print "Fizz" instead of the number
    if (i % 3 == 0) {
      console.log("Fizz");
    }
    // For numbers divisible by 5 (and not 3), print "Buzz" instead.
    else if (i % 5 == 0) {
      console.log("Buzz");
    }
    // Else, print the number
    else {
      console.log(i);
    }
  }
}

fizzBuzz();

/*
2.2a FizzBuzz
After you have FizzBuzz working, modify program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5.

Test Suite

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
*/

function fizzBuzz() {
  // Print all numbers from 1 to 100, with exceptions
  var MAX = 100;
  for (var i = 1; i <= MAX; i++) {
    // For numbers divisible by both 3 and 5, print "FizzBuzz"
    if ( (i % 3 == 0) && (i % 5 == 0)) {
      console.log("FizzBuzz");
    }
    // For numbers divisible only by 3, print "Fizz"
    else if (i % 3 == 0) {
      console.log("Fizz");
    }
    // For numbers divisible only by 5, print "Buzz"
    else if (i % 5 == 0) {
      console.log("Buzz");
    }
    // Else, print the number
    else {
      console.log(i);
    }
  }
}

fizzBuzz();

/*
2.1 Looping a Triangle
Write a loop that makes seven calls to console.log() to output the following
triangle:
#
##
###
####
#####
######
#######
*/
function loopTriangle(size, char) {
  // A traingle has n rows and columns
  // For an nth row, there are n columns
  // Loop through the rows
  for (var x = 1; x <= size; x++) {
    var row = "";
    // Build the row
    for (var y = 1; y <= x; y++) {
      row += char;
    }
    // Print the row
    console.log(row);
  }
}

var SIZE = 30;
var CHAR = "%";

loopTriangle(SIZE, CHAR);

/*
2.3 Chess Board
Write a program that creates a string that represents an 8x8 grid, using
newline chars to separate lines.
At each position of the grid there is either a space or a "#" character.
The chars should form a chess board.

Output:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/

function printChessBoard() {
  var GRIDSIZE = 8;
  var CHAR = "#";
  var SOLID = CHAR;
  var SPACE = " ";
  // There are GRIDSIZE rows and columns
  // Loop through the rows
  var grid = "";
  for (var x = 0; x < GRIDSIZE; x++) {
    // Loop through the columns
    for (var y = 0; y < GRIDSIZE; y++) {
      var square = "";
      // Build the row

      // For even rows
      if (x % 2 == 0) {
        // For even columns
        if (y % 2 == 0) {
          square = SOLID;
        }
        // For odd columns
        else {
          square = SPACE;
        }
      }

      // For odd rows
      else {
        // For even columns
        if (y % 2 == 0) {
          square = SPACE;
        }
        // For odd columns
        else {
          square = SOLID;
        }
      }
      grid += square;
    }
    // Finish each row
    grid += "\n";
  }
  // Print the grid
  console.log(grid);
}

printChessBoard();

/*
https://projecteuler.net/problem=1

Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

/*
Return the sum of an array

Tests

var testArray = [4, 5, 6];
console.log(sumArray(testArray));
  15
*/
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

/*
Return all the natural numbers below limit that are multiples of multi1 or multi2.

Tests

var multi1 = 3;
var multi2 = 5;
var limit = 10;
var multipleArray = findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

var multi1 = 3;
var multi2 = 5;
var limit = 1000;
var multipleArray = findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

*/
function findMultiples(multi1, multi2, limit) {
  // Loop through set of natural numbers
  var array = [];
  for (var i = 1; i < limit; i++) {
    // If i is a multiple of multi1 or multi2, add to the array
    if ( (i % multi1 == 0) || (i % multi2 == 0) ) {
      array.push(i);
    }
  }
  return array;
}

var multi1 = 3;
var multi2 = 5;
var limit = 1000;
var multipleArray = findMultiples(multi1, multi2, limit);
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));


/*
https://projecteuler.net/problem=1

Multiples of 3 and 5 (REWRITTEN TO USE ANY NUMBER OF MULTIPLES)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

/*
Return the sum of an array

Tests

var testArray = [4, 5, 6];
console.log(sumArray(testArray));
  15
*/
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

/*
Return all the natural numbers below limit that are multiples of multi1 or multi2.

Tests

var multi1 = 3;
var multi2 = 5;
var limit = 10;
findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

var multi1 = 3;
var multi2 = 5;
var limit = 10;
findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

var multi1 = 3;
var multi2 = 5;
var limit = 1000;
var multipleArray = findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

*/
function findMultiples(multi1, multi2, limit) {
  // Loop through set of natural numbers
  var multipleArray = [];
  for (var i = 1; i < arguments[arguments.length - 1]; i++) {
    // For every number in the list, test against all the multiple test numbers
    var isMultiple = false;
    for (var j = 0; j < arguments.length - 1; j++) {
      if (i % arguments[j] == 0) {
        isMultiple = true;
      }
    }
    // If the number is a multiple of any of the multiple test numbers, add it
    // to the array
    if (isMultiple == true) {
      multipleArray.push(i);
    }
  }
  // Print the output
  console.log(">1 and <" + arguments[arguments.length - 1] + ", the multiples of:");
  for (var k = 0; k < arguments.length - 1; k++) {
    console.log(arguments[k]);
  }
  console.log("are:");
  for (var l = 0; l < multipleArray.length; l++) {
    console.log(multipleArray[l]);
  }
  console.log("The sum of the multiples is: " + sumArray(multipleArray));
}


var multi1 = 3;
var multi2 = 5;
var multi3 = 11;
var limit = 1000;
findMultiples(multi1, multi2, multi3, limit);

/*
https://projecteuler.net/problem=2
Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four
million, find the sum of the even-valued terms.

Test Suite

var numTerms = 10;
var fibArray = function fibonacciGenerator(terms);
console.log("The Fibonacci Sequence for " + fibArray.length + ": " + fibArray);

*/

// Generate a Fibonacci sequence for the given number of terms
function fibonacciGenerator(numTerms) {
  var fibSeq = [1, 2];
  // Calculate the required number of Fib terms
  for (var i = 0; i < numTerms - 2; i++) {
    fibSeq[i + 2] = fibSeq[i] + fibSeq[i + 1];
  }
  return fibSeq;
}

var numTerms = 10;
var fibArray = fibonacciGenerator(numTerms);
console.log("The Fibonacci Sequence for " + fibArray.length + " terms: " + fibArray);
