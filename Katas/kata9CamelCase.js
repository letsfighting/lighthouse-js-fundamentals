const camelCase = function (input) {


  let capitalizer = '';
  let phrase = input.toLowerCase();

  for (let i = 0; i < phrase.length; i++) {


    if (phrase[i] === ' ') {
      capitalizer = phrase.charAt(i + 1);
      capitalizer = capitalizer.toUpperCase();
      phrase = phrase.slice(0, i) + capitalizer + phrase.slice(i - phrase.length + 2);

    };


  };

  return phrase;


}

console.log(camelCase("THIS is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
