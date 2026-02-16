const pascal = function(n) {
    let res = [1];

    if (n == 1) {
        return res;
    } 
    
    const previousLine = pascal(n - 1);
    previousLine.forEach((number, i) => {
        const rightNeighbor = previousLine[i + 1] || 0;
        res.push(number + rightNeighbor);
    })

    return res;
};

console.log(pascal(4))
  
// Do not edit below this line
module.exports = pascal;
