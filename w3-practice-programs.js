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

For values that do not exceed 90, the even-valued terms are:
2 8 34
The sume of these even-valued terms are:
44


var fibArray = [];
var maxTermValue = 90;
fibArray = fibonacciGenerator(maxTermValue);
console.log(sumEvenValueTerms(fibArray));
--> 44

var fibArray = [];
var maxTermValue = 4000000;
fibArray = fibonacciGenerator(maxTermValue);
console.log(sumEvenValueTerms(fibArray));
*/

// Generate a Fibonacci sequence with values that do not exceed maxTermValue
function fibonacciGenerator(maxTermValue) {
  var fibSeq = [1, 2];
  // Generate a sequence until a term exceeds maxTermValue
  var i = 0;
  var newTerm = 3;
  while (newTerm <= maxTermValue) {
    fibSeq[i + 2] = newTerm;
    i++;
    newTerm = fibSeq[i] + fibSeq[i + 1];
  }
  return fibSeq;
}

function sumEvenValueTerms(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum += array[i];
    }
  }
  return sum;
}

var fibArray = [];
var fibArray = [];
var maxTermValue = 4000000;
fibArray = fibonacciGenerator(maxTermValue);
console.log(sumEvenValueTerms(fibArray));

/*
https://projecteuler.net/problem=3

Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.
LPF = 29

What is the largest prime factor of the number 600851475143 ?
*/

function isPrime(x) {
  for (var i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

function factor(x) {
  var factors = [];
  for (var i = 2; i < x; i++) {
    if (x % i == 0) {
      factors[0] = i;
      factors[1] = x / i;
      return factors;
    }
  }
}

function findPrimeFactors(x) {
  var primeFactors = [];
  function findFactors(x) {
    if (isPrime(x)) {
      return primeFactors.push(x);
    }
    else {
      var factors = factor(x);
      return findFactors(factors[0]) && findFactors(factors[1]);
    }
  }
  findFactors(x);
  return primeFactors;
}


var x = 600851475143;
var pFactors = [];
pFactors = findPrimeFactors(x);
console.log(x);
console.log("Prime Factors: " + pFactors);
// Sort the array into descending order
pFactors.sort(function(a,b){return b-a});
console.log("Largest Prime Factor: " + pFactors[0]);

/*
https://projecteuler.net/problem=4

Largest palindrome product

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is
9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(x) {
  var forwardString = x.toString();
  var reverseString = "";
  for (var i = forwardString.length - 1; i >= 0; i--) {
    reverseString += forwardString[i];
  }
  if (forwardString === reverseString) return true;
  else return false;
}

function findLargestPalindrome() {
  var ARRAYSIZE = 1000;
  var largestPalindrome = [0, 0, 0];
  // Multiply each value of array 1 with each value of array 2
  var product = 0;
  for (var x = 0; x < ARRAYSIZE; x++) {
    for (var y = 0; y < ARRAYSIZE; y++) {
      product = x * y;
      // Is the product a palindrome and larger than the current largest palindrome?
      // If so, record the largest palindrome and its factors
      if (isPalindrome(product) && product > largestPalindrome[0]) {
        largestPalindrome[0] = product;
        largestPalindrome[1] = x;
        largestPalindrome[2] = y;
      }
    }
  }
  // Print the largest palindrome and its factors
  console.log(largestPalindrome[0] + " = " + largestPalindrome[1]
    + " * " + largestPalindrome[2]);
}

findLargestPalindrome();

/*
https://projecteuler.net/problem=5

Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from
1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/
function numEvenlyDivisible(x, maxNumber) {
  var evenlyDivisbile = true;
  for (var j = 1; j <= maxNumber; j++) {
    evenlyDivisbile *= (x % j == 0);
  }
  return evenlyDivisbile;
}


function findSmallestMultiple(maxNumber) {
  var i = 1;
  while (!numEvenlyDivisible(i, maxNumber)) {
    ++i;
  }
  return i;
}

var MAX = 20;
console.log(findSmallestMultiple(MAX));

/*
https://projecteuler.net/problem=6

Sum square difference

Find the difference between the sum of the squares of the first
one hundred natural numbers and the square of the sum.
*/

// x = The sum of the squares of the first 100 natural numbers
// y = The square of the sum of the first 100 natural numbers
// z = y - x
// Find z

function sumOfSquares(max) {
  var sum = 0;
  for (var i = 1; i <= max; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

function squareOfSum(max) {
  var sum = 0;
  var squareOfSum = 0;
  for (var j = 1; j <= max; j++) {
    sum += j;
  }
  squareOfSum = Math.pow(sum, 2);
  return squareOfSum;
}

function diffOfSquaresAndSum(max) {
  var x = 0;
  var y = 0;
  var z = 0;

  x = sumOfSquares(max);
  y = squareOfSum(max);
  z = y - x;
  return z;
}

var MAX = 100;
console.log(diffOfSquaresAndSum(MAX));

/*
https://projecteuler.net/problem=7

10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
that the 6th prime is 13.

What is the 10 001st prime number?

*/

// Generate 10001 prime numbers
// Return the last prime to be generated

function isPrime(x) {
  if (x === 1) return false;
  if (x === 2) return true;
  for (var j = 2; j < x; j++) {
    if (x % j == 0) {
      return false;
    }
  }
  return true;
}

function generateNthPrime(n) {
  // A prime is an integer > 1 that is evenly divisible only by 1 and itself
  var primeCount = 0;
  var prime = 0;
  var i = 1;

  while (primeCount < n) {
    if (isPrime(i)) {
      prime = i;
      primeCount++;
    }
    i++;
  }
  return prime;
}

var N = 10001;
console.log(generateNthPrime(N));
// 13

/*
https://projecteuler.net/problem=8

Largest product in a series

The four adjacent digits in the 1000-digit number that have the greatest
product are 9 × 9 × 8 × 9 = 5832.

Find the thirteen adjacent digits in the 1000-digit number that have
the greatest product.

What is the value of this product?

73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450

*/

var numString = "73167176531330624919225119674426574742355349194934" +
"96983520312774506326239578318016984801869478851843" +
"85861560789112949495459501737958331952853208805511" +
"12540698747158523863050715693290963295227443043557" +
"66896648950445244523161731856403098711121722383113" +
"62229893423380308135336276614282806444486645238749" +
"30358907296290491560440772390713810515859307960866" +
"70172427121883998797908792274921901699720888093776" +
"65727333001053367881220235421809751254540594752243" +
"52584907711670556013604839586446706324415722155397" +
"53697817977846174064955149290862569321978468622482" +
"83972241375657056057490261407972968652414535100474" +
"82166370484403199890008895243450658541227588666881" +
"16427171479924442928230863465674813919123162824586" +
"17866458359124566529476545682848912883142607690042" +
"24219022671055626321111109370544217506941658960408" +
"07198403850962455444362981230987879927244284909188" +
"84580156166097919133875499200524063689912560717606" +
"05886116467109405077541002256983155200055935729725" +
"71636269561882670428252483600823257530420752963450";


// Loop through the string, convert the characters to numbers and store in numArray
// i = 0;
// maxProduct = 0;
// maxProductCounter = 0;
// do
//    calculate product of numArray[i], numArray[i+1] ... numArray[i+3]
//    if product > maxProduct
//      maxProduct = product;
//      maxProductCounter = i;
//    ++i
// while ( (i + 3) <= numArray.length - 1) )
// return maxProduct

function largestProduct(productSize) {
  var numArray = [];
  var maxProduct = 0;
  var maxProductCounter = 0;
  var answer = "";

  for (var i = 0; i < numString.length; i++) {
    numArray[i] = Number(numString[i]);
  }

  var j = 0;
  do {
    var product = 1;
    // Calculate the product of the window
    for (var k = 0; k < productSize; k++) {
      product *= numArray[j + k];
    }
    if (product >= maxProduct) {
      maxProduct = product;
      maxProductCounter = j;
    }
    j++;
  } while ( (j + 3) <= numArray.length - 1);

  // Print the result
  for (var l = 0; l < productSize; l++) {
    answer += numArray[maxProductCounter + l];
    if (l <= productSize - 2) answer += " * ";
    else answer += " = ";
  }
  answer += maxProduct;
  console.log(answer);
}

var SIZE = 13;
largestProduct(SIZE);

/*
https://projecteuler.net/problem=9

Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which
a**2 + b**2 = c**2

For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

Solving for:

a**2 + b**2 = c**2
a + b + c = 1000
*/

function pythagoreanTriplet(sum) {
  for (var i = 1; i <= 1000; i++) {
    for (var j = 1; j <= 1000; j++) {
      for (var k = 1; k <= 1000; k++) {
        if ((i + j + k)  == sum) {
          if (Math.pow(i, 2) + Math.pow(j, 2) == Math.pow(k, 2)) {
            console.log(Math.pow(i, 2) + " * " + Math.pow(j, 2) + " = " + Math.pow(k, 2));
            console.log(i + " + " + j + " + " + k + " = " + sum);
            console.log(i + " * " + j + " * " + k + " = " + (i * j * k));
            return;
          }
        }
      }
    }
  }
}

var SUM = 1000;
pythagoreanTriplet(SUM);

/*
https://projecteuler.net/problem=10

Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

Strategy:

primeSum = 0;
Write isPrime() function
Loop (i) through all natural numbers, 1 ... max - 1
  If isPrime(i)
    add i to primeSum
return primeSum
*/

function isPrime(x) {
  if (x == 1) return false;
  if (x == 2) return true;
  for (var j = 2; j < x; j++) {
    if (x % j == 0) return false;
  }
  return true;
}

function primeSum(max, STATUSCOUNTER) {
  var primeSum = 0;
  for (var i = 1; i < max; i++) {
    if (isPrime(i)) {
      primeSum += i;
    }
    // Print status periodically
    if (i % STATUSCOUNTER == 0) {
      console.log("Numbers checked: " + i);
    }
  }
  return primeSum;
}

var MAX = 2000000;
var STATUSCOUNTER = 1000;
var sumOfPrimes = primeSum(MAX, STATUSCOUNTER);
console.log("The sum of primes below " + MAX + " = " + sumOfPrimes);

/*
https://projecteuler.net/problem=11

Largest product in a grid

In the 20×20 grid below, four numbers along a diagonal line have been marked in red.

08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48


var stringGrid = [];
stringGrid[0] = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08";
stringGrid[1] = "49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00";
stringGrid[2] = "81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65";
stringGrid[3] = "52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91";
stringGrid[4] = "22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80";
stringGrid[5] = "24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50";
stringGrid[6] = "32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70";
stringGrid[7] = "67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21";
stringGrid[8] = "24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72";
stringGrid[9] = "21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95";
stringGrid[10] = "78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92";
stringGrid[11] = "16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57";
stringGrid[12] = "86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58";
stringGrid[13] = "19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40";
stringGrid[14] = "04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66";
stringGrid[15] = "88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69";
stringGrid[16] = "04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36";
stringGrid[17] = "20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16";
stringGrid[18] = "20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54";
stringGrid[19] = "01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48";



The product of these numbers is 26 × 63 × 78 × 14 = 1788696.

What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

Strategy

Store grid as 20 x 20 array of strings (stringGrid)
  var myArray = "14 2".split(" ");
  Iterate through array and convert strings to integers

maxProduct = 0;
Calculate max adjacent number product (4 numbers) for grid using different functions:
  maxVP = maxVerticalProduct(stringGrid)
  maxHP = maxHorizontalProduct(stringGrid)
  maxDPP = maxDiagonalPositiveProduct(stringGrid)
  maxDNP = maxDiagonalNegativeProduct(stringGrid)
For each function:
  product = 1;
  maxProduct = 0;
  Iterate through all the possible windows
    Calculate product inside window
    if product > maxProduct, maxProduct = product
  return maxProduct
return the largest product:
  return Math.max(maxVP, maxHP, maxDPP, maxDNP);

*/


function largestGridProduct() {
  var WINDOWSIZE = 4;
  var ARRAYLENGTH = 20;

  // Create an array of strings
  var stringArray = [
    ["08", "02", "22", "97", "38", "15", "00", "40", "00", "75", "04", "05", "07", "78", "52", "12", "50", "77", "91", "08"],
    ["49", "49", "99", "40", "17", "81", "18", "57", "60", "87", "17", "40", "98", "43", "69", "48", "04", "56", "62", "00"],
    ["81", "49", "31", "73", "55", "79", "14", "29", "93", "71", "40", "67", "53", "88", "30", "03", "49", "13", "36", "65"],
    ["52", "70", "95", "23", "04", "60", "11", "42", "69", "24", "68", "56", "01", "32", "56", "71", "37", "02", "36", "91"],
    ["22", "31", "16", "71", "51", "67", "63", "89", "41", "92", "36", "54", "22", "40", "40", "28", "66", "33", "13", "80"],
    ["24", "47", "32", "60", "99", "03", "45", "02", "44", "75", "33", "53", "78", "36", "84", "20", "35", "17", "12", "50"],
    ["32", "98", "81", "28", "64", "23", "67", "10", "26", "38", "40", "67", "59", "54", "70", "66", "18", "38", "64", "70"],
    ["67", "26", "20", "68", "02", "62", "12", "20", "95", "63", "94", "39", "63", "08", "40", "91", "66", "49", "94", "21"],
    ["24", "55", "58", "05", "66", "73", "99", "26", "97", "17", "78", "78", "96", "83", "14", "88", "34", "89", "63", "72"],
    ["21", "36", "23", "09", "75", "00", "76", "44", "20", "45", "35", "14", "00", "61", "33", "97", "34", "31", "33", "95"],
    ["78", "17", "53", "28", "22", "75", "31", "67", "15", "94", "03", "80", "04", "62", "16", "14", "09", "53", "56", "92"],
    ["16", "39", "05", "42", "96", "35", "31", "47", "55", "58", "88", "24", "00", "17", "54", "24", "36", "29", "85", "57"],
    ["86", "56", "00", "48", "35", "71", "89", "07", "05", "44", "44", "37", "44", "60", "21", "58", "51", "54", "17", "58"],
    ["19", "80", "81", "68", "05", "94", "47", "69", "28", "73", "92", "13", "86", "52", "17", "77", "04", "89", "55", "40"],
    ["04", "52", "08", "83", "97", "35", "99", "16", "07", "97", "57", "32", "16", "26", "26", "79", "33", "27", "98", "66"],
    ["88", "36", "68", "87", "57", "62", "20", "72", "03", "46", "33", "67", "46", "55", "12", "32", "63", "93", "53", "69"],
    ["04", "42", "16", "73", "38", "25", "39", "11", "24", "94", "72", "18", "08", "46", "29", "32", "40", "62", "76", "36"],
    ["20", "69", "36", "41", "72", "30", "23", "88", "34", "62", "99", "69", "82", "67", "59", "85", "74", "04", "36", "16"],
    ["20", "73", "35", "29", "78", "31", "90", "01", "74", "31", "49", "71", "48", "86", "81", "16", "23", "57", "05", "54"],
    ["01", "70", "54", "71", "83", "51", "54", "69", "16", "92", "33", "48", "61", "43", "52", "01", "89", "19", "67", "48"]
  ];

  // Convert 1D array of strings into 2D array of strings
  var numberGrid = [[],[]];
  numberGrid.fill(5);
  console.log(numberGrid);

  for (var i = 0; i < ARRAYLENGTH; i++) {
    numberGrid[i] = parseInt(stringArray[i].split(" "));
  }

  console.log(numberGrid);
  /*
  // Convert array of strings into an array of integers
  var numberGrid = [ARRAYLENGTH] [ARRAYLENGTH];
  for (var j = 0; j < ARRAYLENGTH; j++) {
    for (var k = 0; k < ARRAYLENGTH; k++) {
      numberGrid[j] [k] = parseInt(stringGrid[j] [k]);
    }
  }
  */
}

largestGridProduct();
