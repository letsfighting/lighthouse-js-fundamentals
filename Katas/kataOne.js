const sumLargestNumbers = function (data) {
  let highest = 0;
  let secondHighest = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > highest) {
      secondHighest = highest;
      highest = data[i];
    } else if (data[i] > secondHighest) {
      secondHighest = data[i];
    }
  }
  return highest + secondHighest;
}





console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([101, 4, 34, 6, 92, 2, 101]));
console.log(sumLargestNumbers([10, 10, 10, 10, 10]));