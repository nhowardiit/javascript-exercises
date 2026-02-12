const repeatString = function (repeatString, repeatNum) {
    if (repeatNum < 0) return "ERROR";
    let returnString = "";
    for (i = 0; i < repeatNum; i++) {
        returnString += repeatString;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
