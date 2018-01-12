/* Working through the book (and all exercises) a second time */

// Example of running out of call stack space ("blowing the call stack")
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log(chicken() + "came first.");


/*
  3.1 Minimum
  Write a function 'min' that takes two arguments and returns the minimum
  of the two.

  Tests

  1, 3 --> 1
  3, 1 --> 1
  3, 3 --> null
*/
function min(x, y) {
  if (x < y) {
    return x;
  }
  else if (y < x) {
    return y;
  }
  // if x = y
  else {
    return null;
  }
}

// Test harness
console.log(min(1, 3));
console.log(min(3, 1));
console.log(min(3, 3));
/*
  3.2a Recursion
  Here's another way to determine if a positive whole number (>= 0) is
  even or odd:
    -- Zero is even
    -- One is odd
    -- For any other number N, its evenness is the same as (N-2)
  Define a recursive function 'isEven' corresponding to this description.
  The function should accept a 'number' parameter and return a Boolean.

  Tests
    50 -> true
    75 -> false
    -1 -> Stack overflow
          Why? Can you think of a way to fix this?
        -- Test if argument is negative
*/
function isEven(number) {
  if (number == 0) {
    return true;
  }
  else if (number == 1) {
    return false;
  }
  else {
    return isEven(number-2);
  }
}

// Test harness
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/*
  3.2b Recursion
  Works for negative numbers as well
  Tests
    50  -> true
    75  -> false
    -1  -> false
    -50 -> true
    -75 -> false

*/
function isEven(number) {
  if (number == 0) {
    return true;
  }
  else if ((number == 1) || (number == -1)) {
    return false;
  }
  else {
    // For positive numbers
    if (Math.sign(number) == 1) {
      return isEven(number-2);
    }
    else if (Math.sign(number) == -1) {
        return isEven(number+2);
    }
  }
}

// Test harness
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-50));
console.log(isEven(-75));
