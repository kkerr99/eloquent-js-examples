// 3.1 Minimum
// Write a function "min" that takes two args and returns their minimum.

// 3.1.a Write as a statement
var min = function(num1, num2) {
  if (num1 < num2)
    return num1;
  else
    return num2;
}

// 3.1.b Write as an expression
function min(num1, num2) {
  if (num1 < num2)
    return num1;
  else
    return num2;
}

console.log(min(3,4));
console.log(min(4,3));
console.log(min(18,12));

// 3.2 Recursion

// 3.2.a Write the routine for non-negative integers

function isEven(number){
  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else {
    number -= 2;
    return isEven(number);
  }
}

// Test Vals
console.log(isEven(50));
true
console.log(isEven(75));
false
console.log(isEven(-1));
RangeError: Maximum call stack size exceeded

// 3.2.b Write the routine for for all integers

function isEven(number){
  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else if (number < 0)
    return isEven(-number);
  else {
    number -= 2;
    return isEven(number);
  }
}

// Test Vals
console.log(isEven(50));
true
console.log(isEven(75));
false
console.log(isEven(-1));
false
console.log(isEven(-50));
true
console.log(isEven(-75));
false
