// psuedo code

/*
1. grab string and number from user
2. initialize a counter variable and set value to zero
3. initialize accumulator string variable and set value to inputString. (this will be the iterating variable)
3. while counter is smaller than user inputted number, increment counter by 1
4. for each increment, concatenate accumulator string with input string.
5. return accumulator string.


*/

const repeatString = function (inputString, count) {
  newstr = "";
  // negative check
  if (count < 0) {
    return "ERROR";
  }

  for (let i = 0; i < count; i++) {
    newstr = newstr.concat(inputString);
  }

  return newstr;
};

// Do not edit below this line
module.exports = repeatString;
