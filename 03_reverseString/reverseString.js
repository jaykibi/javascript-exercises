/*
psuedo 

1. grab string from user and store string into variable
2. split string by chars into a list 
3. initialize return string variable
4. loop over split string list from the last element -> first 
5. for each iteration add element to return string variable
6. return return string variable

*/

const reverseString = function (inputString) {
  let stringArray = inputString.split("");
  let reverseArray = [];

  for (let i = 0; i < inputString.length; i++) {
    reverseArray.push(stringArray.pop());
  }

  return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
