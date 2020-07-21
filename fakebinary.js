// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

function fakeBin(x) {

    let returnValue = "";

    x.split("").forEach(element => {
        returnValue += parseInt(element) < 5 ? '0' : '1';
    });

    return returnValue;
}

console.log(fakeBin("18273"));

module.exports = fakeBin;