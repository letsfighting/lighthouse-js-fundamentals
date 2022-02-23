
var laugh = function (laughs) {

  let ha = "";

  for (let i = 0; i < laughs; i++) {
    ha += 'ha';
  }

  return ha += '!';

}

console.log(laugh(10));