//This is test suite
const narcissistic = require('../narcissistic');

test('find narcissistic result', () => {
    expect(narcissistic(7)).toBe(true);
    expect(narcissistic(371)).toBe(true);
    expect(narcissistic(2)).toBe(true);
    expect(narcissistic(12)).toBe(false);

    expect(narcissistic(153)).toBe(true);
    expect(narcissistic(1)).toBe(true);
    expect(narcissistic(435)).toBe(false);
    expect(narcissistic(370)).toBe(true);
    expect(narcissistic(324)).toBe(false);
    expect(narcissistic(371)).toBe(true);
    expect(narcissistic(4328)).toBe(false);
    expect(narcissistic(407)).toBe(true);
    expect(narcissistic(3248)).toBe(false);
    expect(narcissistic(1634)).toBe(true);
    expect(narcissistic(8208)).toBe(true);
    expect(narcissistic(9474)).toBe(true);
    expect(narcissistic(54748)).toBe(true);
    expect(narcissistic(92727)).toBe(true);
    expect(narcissistic(93084)).toBe(true);
    expect(narcissistic(548834)).toBe(true);
    expect(narcissistic(1741725)).toBe(true);
    expect(narcissistic(4210818)).toBe(true);
    expect(narcissistic(9800817)).toBe(true);
    expect(narcissistic(234229983)).toBe(false);
    expect(narcissistic(9926315)).toBe(true);
    expect(narcissistic(24678050)).toBe(true);
    expect(narcissistic(88593477)).toBe(true);
    expect(narcissistic(11513221922401)).toBe(false);
    expect(narcissistic(146511208)).toBe(true);
    expect(narcissistic(472335975)).toBe(true);
    expect(narcissistic(26548238692458)).toBe(false);
    expect(narcissistic(534494836)).toBe(true);
    expect(narcissistic(912985153)).toBe(true);
    expect(narcissistic(4679307774)).toBe(true);
    

});