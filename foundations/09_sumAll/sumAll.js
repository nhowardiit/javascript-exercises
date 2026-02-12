const sumAll = function (a, b) {
    if (typeof a != "number" || typeof b != "number" || a % 1 != 0 || b % 1 != 0 || a < 0 || b < 0) {
        return "ERROR";
    } else if (a > b) {
        let x = b;
        b = a;
        a = x;
    }

    let sum = 0;
    for (let i = a; i < b + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
