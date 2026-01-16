const sumAll = function(a, b) {
    if ((a<0 || typeof a !== "number" || a/Math.floor(a) != 1) ||
        (b<0 || typeof b !== "number" || b/Math.floor(b) != 1)
    ) return "ERROR";
    if (b < a) {
        let temp = b;
        b = a;
        a = temp;
    }

    let total = 0;
    for (let i = a; i <= b; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
