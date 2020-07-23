//This is test suite
const printErrors = require('../printer_errors');

test('find letters above a to m... and total of letters', () => {
    expect(printErrors("aaaa")).toBe("0/4");
    expect(printErrors("nnnn")).toBe("4/4");
    expect(printErrors("mnmn")).toBe("2/4");
});