//This is test suite
const fakebinary = require('../fakebinary');

test('convert a string of integers, less than 5 to 0, higher or equal than 5 to 1', () => {
    expect(fakebinary("191919")).toBe("010101");
    expect(fakebinary("01234")).toBe("00000");
    expect(fakebinary("56789")).toBe("11111");
});