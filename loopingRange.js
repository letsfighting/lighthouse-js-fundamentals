function range(start, end, step) {

  let array1 = [];

  if ((start === undefined) || (end === undefined) || (step === undefined) || (start > end) || (step <= 0)) {
    return array1;
  } else {
    for (let i = start; i <= end; i += step) {
      if (i + step > end) {
        array1.push(i);
        return array1;
      } else {
        array1.push(i);
      }

    }
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));