/*
psuedo
1. grab inputs from user (inputArray, itemsToRemove) **
2. initialize a resultArray **
3. iterate over inputArray **
4. on each iteration of inputArray, check if element is itemsToRemove 
5. add each element to resultArray ONLY IF element is NOT in itemsToRemove
6. if element is in itemsToRemove, DO NOT do anything with it
7. return resultArray
*/

const removeFromArray = function (...params) {
  // example input params: ([1, 2, 3, 4], 7, "tacos")
  // since we are using params, need to grab

  // inputArray, the first value in the params
  let inputArray = params[0];

  // itemsToRemove, rest of the dynamic params
  let itemsToRemove = Array.from(params.slice(1));

  // init resultArray
  let resultArray = [];

  // iterate over inputArray
  for (i = 0; i < inputArray.length; i++) {
    let currentElement = inputArray[i];
    if (!itemsToRemove.includes(currentElement)) {
      // only do this IF currentElement is NOT IN itemsToRemove

      resultArray.push(currentElement);
    }
  }

  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
