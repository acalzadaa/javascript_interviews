/* A Narcissistic Number is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10). */

function narcissistic(value) {
  return value === value.toString().split("").reduce( (res, digit, idx, arr) => 
    res += (digit ** arr.length)
  ,0)
}

console.log(narcissistic(7));

module.exports = narcissistic;