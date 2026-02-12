const reverseString = function (inputString) {
    let inputLen = inputString.length;
    let returnString = "";
    for (i = 0; i <= inputLen; i++) {
        returnString += inputString.charAt(inputLen - i);
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
