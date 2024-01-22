const removeFromArray = function(array, ...args) {
    let originalArray = array;
    let resultArray = [];
    for (let i = 0; i < originalArray.length; i++) {
        if (!args.includes(originalArray[i])) { resultArray.push(originalArray[i]) }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
