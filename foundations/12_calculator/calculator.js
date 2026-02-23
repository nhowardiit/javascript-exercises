const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce(add, 0);
};

const multiply = function (arr) {
    return arr.reduce((product, currentValue) => product * currentValue, 1);
};

const power = function (base, power) {
    return base ** power;
};

const factorial = function (a) {
    if (a == 0) return 1;
    return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
