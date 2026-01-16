const removeFromArray = function(arr, ...itemsToRemove) {
    let newArr = arr.slice(0, arr.length);
    for (let item of itemsToRemove) {
        while (newArr.includes(item)) {
            newArr.splice(newArr.indexOf(item), 1); 
        }
    }     
    return newArr;  
};

// Do not edit below this line
module.exports = removeFromArray;
