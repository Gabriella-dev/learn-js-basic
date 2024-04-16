// 1. create a function that adds two numbers
export function add(a, b) {
  return a + b;
}

// 2.  Write a function to format a number up to specified decimal places. (the input will be jest numbers and decimals, the output will be a string with the number formatted to the specified decimal places.)
export function formatNumber(number, decimals) {
  return number.toFixed(decimals);
}

// 3. Write a function to find the highest value in an array.
// The input will be an array of numbers.
// The output will be the highest number in the array.
export function findHighestValue(array) {
  return Math.max(...array);
}

// 4. Write a function to find the lowest value in an array.
// The input will be an array of numbers.
// The output will be the lowest number in the array.
export function findLowestValue(array) {
  return Math.min(...array);
}

// 5. Write a function to get the greatest common divisor (GCD) of two integers.
// the input will be two integers.
// Note : According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.
export function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}

// 6. Write a JavaScript function to find out if a number is a natural number or not.
// The input will be a number.
// The output will be a boolean.
// Note: Natural numbers are whole numbers from 1 upwards; and sometimes zero is also included.
export function isNaturalNumber(number) {
  const n = number;
  n >= 0;
  if (n != number) return false;
  return true;
}

// 7. Write a function to find the factorial of a number.   (The factorial of a number is the product of all the whole numbers from that number down to 1.)
export function factorial(number) {
  return number < 2 ? 1 : number * factorial(number - 1);
}

// 8. Write a JavaScript function to calculate the sum of values in an array.
// The input will be an array of numbers.
// The output will be the sum of all the numbers in the array.
export function sum(array) {
  return array.reduce((a, b) => a + b, 0);
}

// 9. Write a function to calculate the average of the values in an array. The results should be rounded to the nearest 2 decimal places and to be a number.
  
// The input will be an array of numbers.
// The output will be the average of all the numbers in the array.
export function calculateAverage(array) {
  if (array.length === 0) return 0;

  const sumArray = array.reduce((a, b) => a + b, 0);
  const average = sumArray / array.length;
  const roundedAverage = parseFloat(average.toFixed(2));

  return roundedAverage;
}
// 10. Write a JavaScript function to calculate the nth root of a number.
// The input will be a number and the root.
// The output will be the nth root of the number.
export function calculateNthRoot(number, root) {
  return Math.pow(number, 1 / root);
}

// 11. Write a JavaScript function to convert a positive number to a negative number.
// The input will be a positive number.
// The output will be a negative number.
export function convertToNegative(number) {
  if (number === 0) return 0;
  return -Math.abs(number);
}

// 12. Write a JavaScript function to calculate the percentage (%) of a number.
// The input will be a number and the percentage.
// The output will be the percentage of the number.
export function calculatePercentage(number, percentage) {
  return (number * percentage) / 100;
}

// 13. Write a JavaScript function to check if a number is a whole number or has a decimal place. if the number is a whole number and "It is a whole number." else "Number has a decimal place."
// The input will be a number. The output will be a string.
export function checkNumberType(number) {
  const num = Math.floor(number) === number;

  return num ? "It is a whole number." : "Number has a decimal place.";
}

// 14. Write a JavaScript function to calculate the sum of digits of a number.
// The input will be a number.

// The output will be the sum of the digits of the number.
/*
  Examples:
  sumDigits(99)   --> 18
  sumDigits(12.5) --> 8
*/

export function sumDigits(number) {
  const numbToString = String(number);
  const getJustDigit = numbToString.replace(/\D/g, "");
  const arr = getJustDigit.split("").reduce((acc, num) => acc + Number(num), 0);
  return arr;
}
