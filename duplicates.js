//Count the number of Duplicates

//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits 
//that occur more than once in the input string. The input string can be assumed to contain only alphabets 
//(both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    let totalx = text.toLowerCase().split("").reduce((total, letter) => {
        total[letter] = (total[letter] || 0) + 1;
        return total;
    }, {})

    return Object.keys(totalx).filter(a => totalx[a] > 1).length;
}

console.log(duplicateCount("aa"));

module.exports = duplicateCount;