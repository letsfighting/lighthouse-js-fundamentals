const urlEncode = function (text) {
  text = text.trim();
  replace = '%20'

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      text = text.slice(0, i) + replace + text.slice(i - text.length + 1)
    }
  }

  return text;

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

