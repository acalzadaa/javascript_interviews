//This is test suite
const duplicates = require('./duplicates');

test('a string of aa should return 1', () => {
    expect(duplicates("aa")).toBe(1);
});