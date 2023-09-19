const roundToOneDecimal = num => {
  return Math.round(num * 10) / 10
}

/**
 * @param {number} fahrenheit 
 */
const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9
  return roundToOneDecimal(celsius)
};

/**
 * @param {number} celsius 
 */
const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * 9/5 + 32
  return roundToOneDecimal(fahrenheit)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
