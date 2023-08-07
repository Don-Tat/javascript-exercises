const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) * (5/9);
  return
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = (temperature * (9/5)) + 32;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
