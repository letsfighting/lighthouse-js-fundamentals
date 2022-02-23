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


const makeCase = function (input, style) {

  let phrase = input.toLowerCase();
  let styles = sorter(style);
  styles = [].concat(styles);


  for (let k = 0; k < styles.length; k++) {

    if (styles[k] === 'camel') {
      for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
          let capitalizer = phrase.charAt(i + 1);
          capitalizer = capitalizer.toUpperCase();
          phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 2);
        };
      };

    } else if (styles[k] === 'pascal') {

      capital = phrase.charAt(0);
      capital = capital.toUpperCase();
      phrase = capital + phrase.slice(1);

      for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
          let capitalizer = phrase.charAt(i + 1);
          capitalizer = capitalizer.toUpperCase();
          phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 2);

        };
      };
    } else if (styles[k] === 'snake') {
      for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
          phrase = phrase.slice(0, i) + '_' + phrase.slice(i - phrase.length + 1);
        };
      };
    } else if (styles[k] === 'kebab') {
      for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
          phrase = phrase.slice(0, i) + '-' + phrase.slice(i - phrase.length + 1);
        };
      };
    } else if (styles[k] === 'title') {
      capital = phrase.charAt(0);
      capital = capital.toUpperCase();
      phrase = capital + phrase.slice(1);

      for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
          let capitalizer = phrase.charAt(i + 1);
          capitalizer = capitalizer.toUpperCase();
          phrase = phrase.slice(0, i + 1) + capitalizer + phrase.slice(i - phrase.length + 2);
        };
      };

    } else if (styles[k] === 'vowel') {

      let capitalizer = ''

      for (let i = 0; i < phrase.length; i++) {
        switch (phrase[i]) {
          case 'a':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toUpperCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
          case 'e':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toUpperCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
          case 'i':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toUpperCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
          case 'o':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toUpperCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
          case 'u':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toUpperCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
        }
      };


    } else if (styles[k] === 'consonant') {

      phrase = phrase.toUpperCase();

      for (let i = 0; i < phrase.length; i++) {
        switch (phrase[i]) {
          case 'A':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toLowerCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
          case 'E':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toLowerCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
          case 'I':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toLowerCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
          case 'O':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toLowerCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
          case 'U':
            capitalizer = phrase.charAt(i);
            capitalizer = capitalizer.toLowerCase();
            phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 1);
            break;
        }
      }

    } else if (styles[k] === 'upper') {
      phrase = phrase.toUpperCase();
    } else if (styles[k] === 'lower') {
      phrase = phrase.toLowerCase();
    };
  }
  return phrase;
}





console.log(makeCase("this is a string", "camel"));

console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));