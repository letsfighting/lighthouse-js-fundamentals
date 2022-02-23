const sorter = function (cases) {

  let compare = [];
  cases = [].concat(cases);

  for (let i = 0; i < cases.length; i++) {

    switch (cases[i]) {
      case 'camel':
        compare.push(0);
        break;
      case 'pascal':
        compare.push(1);
        break;
      case 'snake':
        compare.push(2);
        break;
      case 'kebab':
        compare.push(3);
        break;
      case 'title':
        compare.push(4);
        break;
      case 'vowel':
        compare.push(5);
        break;
      case 'consonant':
        compare.push(6);
        break;
      case 'upper':
        compare.push(7);
        break;
      case 'lower':
        compare.push(8);
        break;
    }

  }

  compare = compare.sort(function (a, b) { return a - b });

  for (let j = 0; j < compare.length; j++) {
    switch (compare[j]) {
      case 0:
        compare[j] = 'camel';
        break;
      case 1:
        compare[j] = 'pascal';
        break;
      case 2:
        compare[j] = 'snake';
        break;
      case 3:
        compare[j] = 'kebab';
        break;
      case 4:
        compare[j] = 'title';
        break;
      case 5:
        compare[j] = 'vowel';
        break;
      case 6:
        compare[j] = 'consonant';
        break;
      case 7:
        compare[j] = 'upper';
        break;
      case 8:
        compare[j] = 'lower';
        break;
    }
  }
  return compare;

}

console.log(sorter('snake'));

let test = 'snake';

test = [].concat(test);

console.log(test);