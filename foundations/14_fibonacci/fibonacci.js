const fibonacci = function (n) {
    if (n >= 0) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 1;

        // storage ineffiecent
        // let fibArray = [1, 1];
        // for (let i = 2; i < n; i++) {
        //     fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
        // }
        // return fibArray.pop();

        let curr = 1;
        let prev = 1;
        for (let i = 2; i < n; i++) {
            temp = curr + prev;
            prev = curr;
            curr = temp;
        }
        return curr;
    } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
