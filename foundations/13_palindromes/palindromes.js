const palindromes = function (input) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
    let phrase = input
        .toLowerCase()
        .split("")
        .filter((char) => alphanumerical.includes(char))
        .join("");
    let length = phrase.length;
    for (let i = 0; i < phrase.length; i++) {
        let l1 = phrase[i];
        let l2 = phrase[length - i - 1];
        if (l1 != l2) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
