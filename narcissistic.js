/* A Narcissistic Number is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10). */

function narcissistic(value) {

  let total = value.toString().split("")
  let acum = 0;
  for (let i = 0; i < total.length; i++) {
    acum += total[i] ** total.length;
  }

  return value === acum ? true : false;
}

console.log(narcissistic(111));

module.exports = narcissistic;