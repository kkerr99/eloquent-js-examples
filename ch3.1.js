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
