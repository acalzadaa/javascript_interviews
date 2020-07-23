function printerError(s) {
    return (s.match(/[n-z]/g) || []).length + "/" + s.length;
}

module.exports = printerError;

console.log(printerError("abcd"));