// 2.1 Looping a triangle
for (var i = 1; i < 8; i++){
  var bar = "";
  for (var j = 1; j <= i; j++) {
    bar += "#";
  }
console.log(bar);
}

// 2.2.a FizzBuzz
// Print all nums from 1 to 100
// Nums divisible by 3, print "Fizz"
// Nums divisible by 5 (and not 3), print "Buzz"
for (var i = 1; i < 101; i++) {
  if (i%3 == 0)
    console.log("Fizz");
  else if (i%5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}

// 2.2.b FizzBuzz
// Print all nums from 1 to 100
// Nums divisible by 3, print "Fizz"
// Nums divisible by 5 (and not 3), print "Buzz"
// For nums divisible by both 3 and 5, print "FizzBuzz"
for (var i = 1; i < 101; i++) {
  if ((i % 3 == 0) && (i % 5 == 0))
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}

// 2.3.a Chessboard
// Create a string that represent an 8x8 grid, using \n to separate lines
// Squares are represented by ' ' or '#'. Print string to console.log().
var board = "";
var size = 8;
for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    if (y % 2 == 0) { // For even columns
      if (x % 2 == 0) // For even rows
        board += "#";
      else // For odd rows
        board += " ";
    }
    else { // For odd column
      if (x % 2 == 0) // For even row
        board += " ";
      else // For odd row
        board += "#";
    }
  }
  board += "\n"; // Start a new row
}
console.log(board);
