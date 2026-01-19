const findTheOldest = function(arr) {
    // Initial solution
    // let oldestPerson = arr[0];
    // let oldestAge = (oldestPerson.yearOfDeath || (new Date()).getFullYear()) - oldestPerson.yearOfBirth;
    // let cnt = 0;
    // do {
    //     let currPerson = arr[cnt];
    //     let currPersonAge = (currPerson.yearOfDeath || (new Date()).getFullYear()) - currPerson.yearOfBirth;
    //     if (currPersonAge > oldestAge) {
    //         oldestPerson = currPerson;
    //         oldestAge = currPersonAge;
    //     }
    //     cnt++;
    // } while (cnt < arr.length);
    // return oldestPerson;
    
    return arr.reduce((oldestPerson, currPerson) => {
        let currPersonAge = (currPerson.yearOfDeath || (new Date()).getFullYear()) - currPerson.yearOfBirth;
        let oldestAge = (oldestPerson["yearOfDeath"] || (new Date()).getFullYear()) - oldestPerson.yearOfBirth;
        return (currPersonAge > oldestAge) ? currPerson: oldestPerson;   
    });
};

// Do not edit below this line
module.exports = findTheOldest;
