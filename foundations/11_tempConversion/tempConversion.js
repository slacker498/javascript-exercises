const convertToCelsius = function(inFahreinheit) {
  let res = Number((5/9 * (inFahreinheit - 32)).toFixed(1));
  if (!Number((res + "").at(-1))) return Math.round(res);
  else return res;
};

const convertToFahrenheit = function(inCelsius) {
  let res = Number(((9/5 * inCelsius) + 32).toFixed(1));
  if (!Number((res + "").at(-1))) return Math.round(res);
  else return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
