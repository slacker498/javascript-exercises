const add = function(num1, num2) {
	return Number(num1) + Number(num2);
};

const subtract = function(num1, num2) {
	return Number(num1) - Number(num2);
};

const sum = function(arr) {
  if (arr.length == 0) return 0;
	return arr.reduce( (total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce( (pdt, num) => pdt * num, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let res = 1;
  for (let i = num; i > 1; i--) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
