// return hello world
export function helloWorld() {}

/* Write a JavaScript function isBlank(input) that checks whether or not the input String is blank. A blank string is one that contains nothing but whitespace characters.
The function returns true if the input String is blank, false otherwise. */

export function isBlank(str) {
  return /^\s+$/.test(str) || str === "";
}

/*Write a JavaScript function stringToArray(input) to split a string and convert it into an array of words.
The function should return the array of words. */

export function stringToArray(str) {
  console.log(str);
  return str === "" ? [] : str.split(" ");
}
