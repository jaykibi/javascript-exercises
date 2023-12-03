/*  
Celsius to Fahrenheit: °F = °C × (9/5) + 32
Fahrenheit to Celsius: °C = (°F - 32) × 5/9
*/

const convertToCelsius = function (temp) {
  let returnTemp = ((temp - 32) * 5) / 9;

  returnTemp = Math.round(returnTemp * 10) / 10;
  return returnTemp;
};

const convertToFahrenheit = function (temp) {
  let returnTemp = temp * (9 / 5) + 32;

  returnTemp = Math.round(returnTemp * 10) / 10;
  return returnTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
