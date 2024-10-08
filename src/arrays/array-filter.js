// 1. Given an array of numbers, return a new array that only includes the even numbers.
// the input is an array of numbers
// if the input is an empty array, return []
// the input array will have only numbers
/*  examples:   
evenNumbers([2, 5, 100]); // [2, 100]
evenNumbers([2, 5, 100, 0]); // [2, 100, 0]
evenNumbers([]); // []
*/
export const evenNumbers = (numbersArray) => {
  return numbersArray === 0
    ? []
    : numbersArray.filter((number) => number % 2 === 0);
};

// 2. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// the input is an array of strings
// if the input is an empty array, return []
// the input array will have only strings
/*  examples:
shortStrings(["dog", "wolf", "by", "family", "eaten", "camping"]); // ["dog", "wolf", "by", "eaten"]
shortStrings(["dog", "wolf", "by", "family", "eaten", "camping", ""]); // ["dog", "wolf", "by", "eaten", ""]
shortStrings([]); // []
*/
export const shortStrings = (stringsArray) => {
  return stringsArray === 0
    ? []
    : stringsArray.filter((string) => string.length <= 5);
};

// 3. Given an array of students objects, each object has a name property and age property. Write a function that return an array of the names of the students who are older than 18 years old.
// the input is an array of objects
// if the input is an empty array, return []
// the input array will have only objects with name and age properties
/*  examples:   
olderThan18([{name: 'John', age: 16}, {name: 'Jane', age: 24}, {name: 'Jim', age: 15}]); // ['Jane']
olderThan18([{name: 'John', age: 16}, {name: 'Jane', age: 24}, {name: 'Jim', age: 15}, {name: 'Jill', age: 19}]); // ['Jane', 'Jill']
olderThan18([]); // []
*/
export const olderThan18 = (studentsArray) => {
  if (studentsArray.length === 0) return [];
  const namesAge = studentsArray.filter((names) => names.age > 18);
  return namesAge.map((names) => names.name);
};

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
export const clubMembers = (peopleArray) => {
  return peopleArray.filter((item) => item.member === true);
};

//  5.write a function called counterSpy. It takes an array of names. The function should return an array containing the names of the people who aren't spies.
// Recent intelligence has revealed that all spies codename include the letters 's', 'p' or 'y'. You can't afford to take any chances, and all names that include those letters should be removed.
// the input is an array of strings
// if the input is an empty array, return []
// the input array will have only strings
/*  examples:
counterSpy(["John", "Stephan", "Jey"]); // ["John"]
contrSpy(['Diana', 'Alex', 'Aly', 'Pete', 'Aster'],) // [ 'Diana','Alex']
contrSpy([]); // []
*/

// EXTRA CREDIT:
// Also, our spy admin team have asked that the names come back in alphabetical order, for spy filing purposes. So if you could do that you'd really be saving them a lot of work. Thanks.

// contrSpy(['Diana', 'Alex', 'Aly', 'Pete', 'Aster'],) // [ 'Alex','Diana']

export const counterSpy = (namesArray) => {
  return namesArray.length == 0
    ? []
    : namesArray.sort().filter((name) => !/[spy]/gi.test(name));
};


