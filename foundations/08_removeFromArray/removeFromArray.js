const removeFromArray = function (array, ...remove) {
    let returnArray = [];
    // from solution:
    // array.forEach(item) => {
    for (const item of array) {
        if (!remove.includes(item)) {
            returnArray.push(item);
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
