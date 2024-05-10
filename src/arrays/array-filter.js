// 1. Given an array of numbers, return a new array that only includes the even numbers.
// the input is an array of numbers
// if the input is an empty array, return []
// the input array will have only numbers
/*  examples:   
evenNumbers([2, 5, 100]); // [2, 100]
evenNumbers([2, 5, 100, 0]); // [2, 100, 0]
evenNumbers([]); // []
*/
export const evenNumbers = (nubersArray) => {};

// 2. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// the input is an array of strings
// if the input is an empty array, return []
// the input array will have only strings
/*  examples:
shortStrings(["dog", "wolf", "by", "family", "eaten", "camping"]); // ["dog", "wolf", "by", "eaten"]
shortStrings(["dog", "wolf", "by", "family", "eaten", "camping", ""]); // ["dog", "wolf", "by", "eaten", ""]
shortStrings([]); // []
*/
export const shortStrings = (strinsArray) => {};

// 3. Given an array of students objects, each object has a name property and age property. Write a function that return an array of the names of the students who are older than 18 years old.
// the input is an array of objects
// if the input is an empty array, return []
// the input array will have only objects with name and age properties
/*  examples:   
olderThan18([{name: 'John', age: 16}, {name: 'Jane', age: 24}, {name: 'Jim', age: 15}]); // ['Jane']
olderThan18([{name: 'John', age: 16}, {name: 'Jane', age: 24}, {name: 'Jim', age: 15}, {name: 'Jill', age: 19}]); // ['Jane', 'Jill']
olderThan18([]); // []
*/
export const olderThan18 = (studentsArray) => {};

// 4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// the input is an array of objects
// if the input is an empty array, return []
// the input array will have only objects with name and member properties
// the member property is a boolean
/*  examples:
clubMembers([{name: 'John', member: true}, {name: 'Jane', member: false}, {name: 'Jim', member: false}]); // [{name: 'John', member: true}]
clubMembers([{name: 'John', member: true}, {name: 'Jane', member: false}, {name: 'Jim', member: false}, {name: 'Jill', member: true}]); // [{name: 'John', member: true}, {name: 'Jill', member: true}]
clubMembers([]); // []
*/
export const clubMembers = (peopleArray) => {};
