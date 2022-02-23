let ha = "";

function laugh(num) {
  for (let i = 0; i < num; i++) {
    ha += "ha";
  }

  return ha + '!';
}

console.log(laugh(7));