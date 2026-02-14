const factorial = function (n) {
  if (
    !(typeof n === "number") ||
    n < 0 ||
    (n != 0 && n / Number(n.toFixed(0)) != 1)
  )
    return undefined;

  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;