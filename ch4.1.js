/* Working through the book (and all exercises) a second time */

// Weresquirrel Code
require('.http://eloquentjavascript.net/code/jacques_journal.js')

var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  })
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree",
  "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);

for (var event in map)
  console.log("The correlation for '" + event + "' is " + map[event]);

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

// Print the correlation value for "pizza"
var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

// List all the correlation property names and values
for (var event in correlations)
  console.log(event + ": " + correlations[event]);

// Show correlations where (c > 0.1) or (c < -0.1)
for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ": " + correlation);
}

// Check the correlation between eating peanuts and not brushing teeth
for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) &&
      !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

// Exercises

/*
    4.1.a The Sum of a Range
    Write the fucntions to make this happen:
    console.log(sum(range(1, 10)));

    Write a "range" function that takes two arguments, "start" and "end",
    and returns an array containing all the numbers from "start" up to
    (and including) "end".

    Next, write a "sum" function that takes an array of numbers and returns
    the sum of these numbers. Run the previous program and see whther it does
    indeed return 55.

    Tests

    range()

    console.log(range(1, 3));   1, 2, 3
    console.log(range(2, 5));   2, 3, 4, 5
    console.log(range(1, 10));  1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    sum()

    console.log(sum([1, 2, 3]));                        6
    console.log(sum([2, 3, 4, 5]));                     14
    console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  55

    sum((range())

    console.log(sum(range(1, 3)));    6
    console.log(sum(range(2, 5)));    14
    console.log(sum(range(1, 10)));   55

*/
function range(start, end) {
  var numList = [];
  for (i = start; i <= end; i++) {
    numList.push(x);
  }
  return numList;
}

function sum(array) {
  var arraySum = 0;
  for (i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  return arraySum;
}

/*
    4.1.b
    Modify "range" to take an optional third argument "step" argument. If no
    step is given, the array element increments are 1 (the old behavior).
    The call "range(1,10,2)" should return [1, 3, 5, 7, 9].
    Make sure it also works with negative step values:
      "range(5, 2, -1)" --> [5, 4, 3, 2]

    Tests

    range()

    console.log(range(1, 3));   [1, 2, 3]
    console.log(range(2, 5));   [2, 3, 4, 5]
    console.log(range(1, 10));  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(range(1, 10, 2));     [1, 3, 5, 7, 9]
    console.log(range(5, 2, -1));     [5, 4, 3, 2]
    console.log(range(10, 1, -3));    [10, 7, 4, 1]
*/
    function range(start, end, step) {
      if (step == undefined)
        step = 1;
      var numList = [];

      if (end > start) {
        for (i = start; i <= end; i+= step) {
          numList.push(i);
        }
      }
      else {
        for (i = start; i >= end; i+= step) {
          numList.push(i);
        }
      }
      return numList;
    }

/*
    4.2 Reversing an Array
    Write two functions, "reverseArray" and "reverseArrayInPlace".
    "reverseArray" takes an array as an argument and produces a new
    array that has the same elements in the inverse order.
    "reverseArrayInPlace" does what the "reverse" method does--modifies
    the array given as an argument in order to reverse its elements.
    Neither may use the standard "reverse" method.
*/

/*
    reverseArray
    Takes an array as an argument and produces a new array that has the
    same elements in the inverse order.

    Tests
    var array1 = [1, 2, 3];
    var array2 = reverseArray(array1);
    console.log(array2);              [3, 2, 1]
    array1 == array2;                false
*/
function reverseArray(array) {
  var inverseArray = [];
  for (i = 0; i < array.length; i++) {
    inverseArray[i] = array[(array.length - 1) - i];
  }
  return inverseArray;
}

/*
    reverseArrayInPlace
    The function does what the "reverse" method does--modifies
    the array given as an argument in order to reverse its elements.

    Tests
    var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
    reverseArrayInPlace(fruits1);
    console.log(fruits1);       [Mango, Apple, Orange, Banana]

*/
function reverseArrayInPlace(array) {
  var tempInverseArray = [];
  // Pop elements off the end of array, and build temInverseArray
  while (array.length != 0) {
    tempInverseArray.push(array.pop());
  }
  // Copy the elements from tempInverseArray to array
  for (i = 0; i < tempInverseArray.length; i++) {
    array[i] = tempInverseArray[i];
  }
}

/*
  4.3 A List

  Write a function "arrayToList" that builds up a data structure like the
  previous one when given [1, 2, 3] as an argument.

  Write a "listToArray" function that produces an array from a list.

  Write the helper function "prepend" which takes an element and a list
  and creates a new list that adds the element to the front of the input list.

  Write "nth" (in both iterative and recursive versions) which takes a list
  and a number and returns the element at the given position in the list,
  or "undefined" when there is no such element.
*/

/*
  arrayToList

  Builds up a data structure like the previous one when given [1, 2, 3] as
  an argument.

  // Some test code

  // An object created inside a function survives after the function call
  function returnLocalArray() {
    var array = [1, 2, 3];
    return array;
  }

  var array1 = returnLocalArray();
  console.log(typeof array1);
    object
  console.log(array1);
    (3) [1, 2, 3]


  // A global object var can be passed to a function as a parameter. The
  // function can update the object, and the update survives after the
  // function call.
  var array2 = [1, 2, 3];

  function returnGlobalArray(array2) {
    array = [4, 5, 6];
    return array;
  }

  array2 = returnGlobalArray(array2);
  console.log(typeof array2);
    object
  console.log(array2);
    (3) [4, 5, 6]

  Tests

  var list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  }

  console.log(typeof list);         object

  var array = [1, 2, 3];
  var list1 = {};
  list1 = arrayToList(array);
  console.log(typeof list1);         object

  console.log(list1.value);          1
  console.log(list1.rest);           >{value: 2, rest: {…}}
  console.log(list1.rest.value);     2
  console.log(list1.rest.rest);      >{value: 3, rest: null}
*/

function arrayToList(array) {
  var list = {};
  list.value = array[0];
  if (array.length == 1)
  {
    list.rest = null;
    return list;
  }
  else {
    list.rest = arrayToList(array.slice(1));
    return list;
  }
}

/*
  listToArray

  Produces an array from a list.

  Tests

  var array1 = [1, 2, 3];
  var list = arrayToList(array1);
  var array2 = listToArray(list);
  console.log("array1: " + "[" + array1 + "]");
  console.log("array2: " + "[" + array2 + "]");
*/
function listToArray(list) {
  var array = [];
  function pushListToArray(list) {
  array.push(list.value);
    if (list.rest == null) {
      return;
    }
    else {
      pushListToArray(list.rest);
    }
  }
  return array;
}
