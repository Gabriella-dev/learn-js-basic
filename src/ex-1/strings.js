// 1. return hello world
export function helloWorld() {
  return "hello world";
}

/* 2. Write a JavaScript function isBlank(input) that checks whether or not the input String is blank. A blank string is one that contains nothing but whitespace characters.
The function returns true if the input String is blank, false otherwise. */

export function isBlank(str) {
  return /^\s+$/.test(str) || str === "";
}

/* 3. Write a JavaScript function stringToArray(input) to split a string and convert it into an array of words.
The function should return the array of words. */

export function stringToArray(str) {
  console.log(str);
  return str === "" ? [] : str.split(" ");
}

// 4. Write a JavaScript function to check whether an 'input' is a string or not.
// The function should return true if the input is a string, false otherwise.
export function isString(input) {
  return typeof input === "string";
}

// 5. Write a JavaScript function to capitalize the first letter of a string.
// the function should return the capitalized string.
// the input string will be a single word.
export function capitalizeFirstLetter(str) {
  // return str && str[0].toUpperCase() + str.slice(1);

  return str && str.replace(/^./, (string) => string.toUpperCase());
}


// 6. Write a JavaScript function to capitalize the first letter of each word in a string.
// the function should return the capitalized string.
// the input string will be a sentence.

export function capitalizeEachWord(str) {
  const array1 = str.split(" ");
  const newArray1 = [];

  for (let x = 0; x < array1.length; x++) {
    newArray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newArray1.join(" ");
}


// 7. Write a JavaScript function to convert a string into camel case.
// the function should return the camel cased string.
// the input string will be a sentence.
/*example:
console.log(camelize("JavaScript Exercises")); => "JavaScriptExercises"
console.log(camelize("JavaScript exercises")); =>"JavaScriptExercises"
console.log(camelize("JavaScriptExercises")); => "JavaScriptExercises"*/

export function camelCase(str) {
  if (str.length === 0) return "";
  const splitAndFilterStr = str.split(" ").filter((elm) => elm !== "");

  return splitAndFilterStr
    .map((x, index) => {
      if (index == 0) return x.toLowerCase();
      return x.substr(0, 1).toUpperCase() + x.substr(1).toLowerCase();
    })
    .join("");
}

/* 8.Write a JavaScript function to find a word within a string.
The function should return:
1. 'The word <word> was found <number> times if the word is found, 
2. 'The word <word> does not exist in the sentence.' if the word is  not in the sentence.
3. if the word is an empty string, the function should return 
'You are searching for an empty string. Please provide a valid word.'
4. if the sentence is an empty string, the function should return 
'You are searching for a word in an empty string. Please provide a valid sentence.'

the input string will be a sentence.
the function should be case sensitive.

example:
console.log(search_word('The quick brown fox', 'fox'));
Output: The word fox was found 1 times.

console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output: The word aa was found 2 times

console.log(search_word('aa, bb, cc, dd, aa', 'aaa'));
 Output: The word aaa does not exist in the sentence.

console.log(searchWord("Hello World", ""));
Output: You are searching for an empty string. Please provide a valid word.

console.log(searchWord("", "World")); 
Output: You are searching for a word in an empty string. Please provide a valid sentence.
*/

export function searchWord(sentence, word) {}

