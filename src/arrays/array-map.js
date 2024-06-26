import { capitalizeEachWord } from "../ex-1/strings.js";

// 1. write a function that Make an array of numbers that are doubles of the first array
//the input is an array of numbers
// if the input is an empty array, return []

/*
examples§   
curvedNumbers([]); // []
doubleNumbers([2, 5, 100]); // [4, 10, 200]
doubleNumbers([2, 5, 100, 0]); // [4, 10, 200, 0]

*/

export const doubleNumbers = (input) => {
  if (input.length === 0) return [];
  return input.map((elem) => elem * 2);
};

// 2. write a function that Take an array of numbers and make them strings
//the input is an array of numbers
// if the input is an empty array, return []
/*
examples§
stringifyNumbers([]); // []
stringifyNumbers([2, 5, 100]); // ['2', '5', '100']
*/

export const stringifyNumbers = (input) => {
  if (input === 0) return [];
  return input.map(String);
};

// 3. you have an array of students objects, each object has a name property and age property write a function that Capitalize each first letter in the name of the students
// the input is an array of objects
// if the input is an empty array, return []
// the object will have a name property with a non empty string value.
/*  
examples: 
capitalizeNames([{name: 'john doe', age:24}, 
                {name: 'jane LEAH Lennon', age 34},
                {name: 'avatar', age: 23}]);
            
            ]); returns 
            [{name: 'John Doe', age:24}, 
            {name: 'Jane Leah Lennon', age 34},
            {name: 'Avatar', age: 23}]


capitalizeNames([]); return [],
*/

export const capitalizeNames = (students) => {
  const studentsName = students.name.capitalizeEachWord();

  return studentsName;
};
