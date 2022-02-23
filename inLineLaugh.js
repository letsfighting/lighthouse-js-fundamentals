function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}




emotions('happy', function laugh(laughs) {
  let ha = "";
  for (let i = 0; i < laughs; i++) {
    ha += 'ha';
  }
  return ha += '!';
});