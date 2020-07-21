//This is test suite
const friend = require('../friend');

test('a string with xxoo should return true', () => {
    expect(friend(["abcd", "efg", "hijk", "lmnop"])).toEqual(["abcd", "hijk"]);
});