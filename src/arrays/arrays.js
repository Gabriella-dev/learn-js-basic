// 1. Write a JavaScript function to check whether an `input` is an array or not.

/**
 * example usage:
 * isArray([]) -> true;
 * isArray([1, 2, 3]) -> true;
 * 
isArray(123) -> false
isArray("hello") -> false;
isArray ({key: "value" }) -> false;
 */
export const isArray = (input) => {};

// 2. Write a JavaScript function to clone an array.
/**
 * example usage:
 * cloneArray([1, 2, 3]) -> [1, 2, 3]
 * cloneArray(["a", "b", "c"]) -> ["a", "b", "c"]
 * */

export const cloneArray = (input) => {};

// 3. using .slice() method Write a JavaScript function to get part of an array.
// If 'n' is not provided, return all element of the array.
// If 'n' is provided, return the last 'n' elements of the array.
/**
 * example usage:
 * animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
 * getLastElement(animals) -> ['ant', 'bison', 'camel', 'duck', 'elephant']
 * getLastElement(animals, 3) -> ['duck', 'elephant']
 *
 * */
export const getLastElements = (input, n) => {};

// 4. Write a simple JavaScript program to join all elements of the following array into a string.
/*
- the function takes an array as an argument and a separator
- the function returns a string that contains all the elements of the array separated by separator
- if separator is not provided, it should default to ','
- if the array is empty, it should return an empty string
*/
/**
 * example usage:
 * myColor = ["Red", "Green", "White", "Black"];
 * joinArray(myColor) -> "Red,Green,White,Black"
 * joinArray(myColor, '+') -> "Red+Green+White+Black"
 * joinArray(myColor, ' ') -> "Red Green White Black"
 * joinArray([r, e, d], '') -> "red"
 * joinArray([], '') -> ""
 *
 *
 * */
export const joinArray = (input, separator) => {};

// 5. Write a JavaScript function to find the most frequent item of an array.
// If there are multiple items that appear the same number of times, return the first item that appears in the array.
// If the array is empty, return "The array has no elements".
// If the array contains only one element, return that element.

/**
 * example usage:
 * mostFrequentItem([1, 3, 1, 3, 2, 1]) -> 1
 * mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9]) -> 'a'
 * mostFrequentItem([3, 3, 3, 2, 2, 2]) -> 3
 * mostFrequentItem([]) -> "The array has no elements"
 * */

export const mostFrequentItem = (input) => {};
