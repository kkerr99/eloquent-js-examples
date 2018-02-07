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
