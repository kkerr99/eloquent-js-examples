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
