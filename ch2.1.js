/* Working through the book (and all exercises) a second time */

// 2.1 Looping a triangle
var brick = "#";
var triangleBase = brick;
for (var i = 0; i < 7; i++) {
  console.log(triangleBase);
  triangleBase = triangleBase + brick;
}
