// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

function xo(str) {

    let result = str.toLowerCase().split("").filter(a => (a === 'x' || a === 'o')).reduce((count, letter) => {
        count[letter] = (count[letter] || 0) + 1;
        return count;
    }, {});

    return result['x'] === result['o'] ? true: false;
}

module.exports = xo;
