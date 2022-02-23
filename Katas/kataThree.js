const numberOfVowels = function (data) {
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'a':
        count++;
        break;
      case 'e':
        count++;
        break;
      case 'i':
        count++;
        break;
      case 'o':
        count++;
        break;
      case 'u':
        count++;
        break;
    }
  }

  return count;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("aeiouaoergiuafjdflergkerk"));
console.log(numberOfVowels("ffffffffffffff"));

