// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

function fakeBin(x) {
    let returnValue = "";
    return x.split("").reduce((initValue, currentValue) => {

        if(returnValue.length === 0){
            returnValue += parseInt(initValue) < 5 ? '0' : '1';
        }

        returnValue += parseInt(currentValue) < 5 ? '0' : '1';

        return returnValue;
    });
}

console.log(fakeBin("982734"));

module.exports = fakeBin;