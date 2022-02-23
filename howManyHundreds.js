function howManyHundreds(number) {
  let i = 0;

  while (number >= 100) {
    i++;
    number -= 100;
  }

  return i;

}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);