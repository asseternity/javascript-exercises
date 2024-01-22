const convertToCelsius = function(farenheit) {
  let celciusFull = (farenheit - 32) * 5/9;
  let celcius = Math.round(celciusFull * 10) / 10;
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  let farenheitFull = (celcius * 9/5 + 32);
  let farenheit = Math.round(farenheitFull * 10) / 10;
  return farenheit;
};

// x °C ≘ (x × 9/5 + 32) °F	
//x °F ≘ (x − 32) × 5/9 °C

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
