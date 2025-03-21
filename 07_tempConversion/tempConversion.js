const convertToCelsius = function(givenNumber) {

  let celsiusConversion = ((5/9) * (givenNumber - 32));

  return parseFloat(celsiusConversion.toFixed(1));

};

const convertToFahrenheit = function(givenNumber) {
  
  let fahrenheitConversion = ((9/5) * givenNumber + 32);

  return parseFloat(fahrenheitConversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
