/*
rectangle: length × width
triangle: base × height / 2
circle: π × radius2
*/

function calculateRectangleArea(length, width) {
  let area;
  length < 0 || width < 0 ? area = undefined : area = length * width;
  return area;
}

function calculateTriangleArea(base, height) {
  let area;
  base < 0 || height < 0 ? area = undefined : area = base * height / 2;
  return area;
}
function calculateCircleArea(radius) {
  let area;
  raidus < 0 ? area = undefined : area = Math.PI * radius * radius;
  return area;

}
