const contains = function(obj, val) {
    // Base steps
    if (typeof obj !== "object" || Array.isArray(obj)) return Object.is(obj, val)
    else if (!obj) return Object.is(obj, val);

    // Recursive step
    else {
        let isPresent = false;
        for (let o of Object.values(obj)) {
            isPresent ||= contains(o, val);   
            if (isPresent) break;
        }
        return isPresent;
    }
};
  
// Do not edit below this line
module.exports = contains;
