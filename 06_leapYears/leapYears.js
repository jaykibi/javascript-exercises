/*
psuedo
1. get input from user
2. check if input is divisible by 4, number is a leap year, unless also divisible by 100
3. check if input is divisible by 100, number is not leap year, unless also divisible by 400
4. check if input is divisible by 400, number is a leap year
5. return 
*/

const leapYears = function (year) {
  // check year % 400
  if (year % 400 == 0) {
    return true;
  }
  // check year % 4 = 0 &&
  // not year % 100 = 0
  if (year % 4 == 0 && !(year % 100 == 0)) {
    return true;
  }

  return false;
};

// Do not edit below this line
module.exports = leapYears;
