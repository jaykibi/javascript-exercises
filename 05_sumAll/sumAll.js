/*
Implement a function that takes 2 integers and returns the sum of every number between(and including) them:


sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

psuedo:
1. grab numbers from user
2. initialize return variable (finalSum)
3. loop between given numbers
4. on each iteration add current number to the finalSum
5. return finalSum
*/

function sumAll(num1, num2) {
  // validate parameters
  if (
    typeof num1 !== typeof 1 ||
    typeof num2 !== typeof 1 ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  // larger number first
  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let finalSum = 0;

  for (let i = num1; i <= num2; i++) {
    finalSum = finalSum + i;
  }

  return finalSum;
}

// Do not edit below this line
module.exports = sumAll;
