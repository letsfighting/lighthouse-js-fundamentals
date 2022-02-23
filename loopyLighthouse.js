/*

for (let number = 100; number <= 200; number++) {
  if ((number % 3 === 0) && (number % 4 === 0)) {
    console.log('LoopyLighthouse');
  } else if (number % 3 === 0) {
    console.log('Loopy');
  } else if (number % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(number);
  }
}

*/

function loopyLighthouse(range, multiples, words) {

  if ((range.length !== 2) || (multiples.length !== 2) || (words.length !== 2)) {
    return console.log('error');
  } else if (range[0] > range[1]) {
    return console.log('error');
  } else {
    for (let start = range[0]; start <= range[1]; start++) {
      if ((start % multiples[0] === 0) && (start % multiples[1] === 0)) {
        console.log(words[0] + words[1]);
      } else if (start % multiples[0] === 0) {
        console.log(words[0]);
      } else if (start % multiples[1] === 0) {
        console.log(words[1]);
      } else {
        console.log(start);
      }
    }
  }


}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

