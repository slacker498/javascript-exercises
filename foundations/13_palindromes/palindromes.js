const palindromes = function (word) {
    for (let punc of ['.', ',', '?', '\n', '!', ' ']) {
        word = word.replaceAll(punc, ''); // NB:// this approach does not consider potential cases
    }
    return word.toLowerCase() === (Array.from(word)).reverse().join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
