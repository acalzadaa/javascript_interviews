function printerError(s) {
    let total_length = s.length;
    let match = s.match(/[n-z]/g);
    if (match) {
        return match.length + "/" + total_length;
    } else {
        return "0/" + total_length;
    }
}

module.exports = printerError;

console.log(printerError("abcnop"));