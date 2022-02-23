function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(levels) {
  let triangle = "";
  for (let counter = 1; counter <= levels; counter++) {
    triangle = triangle + makeLine(counter);
  }
  return triangle;
}

console.log(buildTriangle(10));