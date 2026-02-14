const totalIntegers = function (obj) {
  if (typeof obj == "number" && obj <= 0 && Number.isFinite(obj) && Number.isInteger(obj)) return 1;
  if (!obj || typeof obj == "string") return 0;
  if (typeof obj == "number" && obj / obj.toFixed(0) == 1) return 1;
  else {
    let sum = 0;
    for (let o of Object.values(obj)) {
      sum += totalIntegers(o);
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = totalIntegers;
