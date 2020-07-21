//This is test suite
const xo = require('../xo');

test('a string with xxoo should return true', () => {
    expect(xo("xo")).toBe(true);
    expect(xo("xxoo")).toBe(true);
    expect(xo("xoxo")).toBe(true);
    expect(xo("oxaxo")).toBe(true);
    expect(xo("aaaa")).toBe(true);
    expect(xo("aaxaa")).toBe(false);
    expect(xo("aaoaa")).toBe(false);
});