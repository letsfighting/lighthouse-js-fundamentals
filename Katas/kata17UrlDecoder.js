

const urlDecode = function (text) {
  text = text.replace(/%20/g, ' ');
  keyValuePairs = text.split('&');
  let decoded = {};
  let split = [];

  for (let i = 0; i < keyValuePairs.length; i++) {

    split = propertyDefiner(keyValuePairs[i]);
    decoded[split[0]] = split[1];



  }

  return decoded;

};


const propertyDefiner = function (property) {


  return property.split('=');


}



console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);