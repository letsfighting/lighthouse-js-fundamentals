const multiplicationTable = function (maxValue) {
  let rValue = "";
  for (let i = 1; i <= maxValue * maxValue; i++) {

    if (i % maxValue === 0) {
      rValue += (i + '\n');
    } else {
      rValue += (i + ' ');
    }


  }

  return rValue;

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));