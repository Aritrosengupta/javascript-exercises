const convertToCelsius = function(temp) {
  let c=(temp-32)*(5/9);
  return +(c.toFixed(1));
};

const convertToFahrenheit = function(temp) {

let f=(temp*1.8)+32;
return +(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
