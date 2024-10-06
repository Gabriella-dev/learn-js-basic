// 1. create a function that takes an array of string and return sorted in alphabetical order
// the input is an array of strings
// the function should return an array of strings sorted in alphabetical order
// if the input is an empty array, return []
// the input array will have only strings
// examples:
// alphabeticalOrder(["dog", "wolf", "by", "family", "eaten", "camping"]); // ["by", "camping", "dog", "eaten", "family", "wolf"]
// alphabeticalOrder(["dog", "wolf", "by", "family", "eaten", "camping", ""]); // ["", "by", "camping", "dog", "eaten", "family", "wolf"]
// alphabeticalOrder([]); // []
// */
export const alphabeticalOrder = (stringsArray) => {
  return stringsArray === 0 ? [] : stringsArray.sort();
};

// 2. create a function that takes an array of string and return sorted in reverse alphabetical order
// the input is an array of strings
// the function should return an array of strings sorted in reverse alphabetical order
// if the input is an empty array, return []
// the input array will have only strings
/*examples:
reverseAlphabeticalOrder(["dog", "wolf", "by", "family", "eaten", "camping"]); // ["wolf", "family", "eaten", "dog", "camping", "by"]
reverseAlphabeticalOrder(["dog", "wolf", "by", "family", "eaten", "camping", ""]); // ["wolf", "family", "eaten", "dog", "camping", "by", ""]
reverseAlphabeticalOrder([]); // []
*/

export const reverseAlphabeticalOrder = (stringsArray) => {};

// 3. create a function that takes an array of numbers and return sorted in ascending order
// the input is an array of numbers (integers)
// the function should return an array of numbers sorted in ascending order
// if the input is an empty array, return []
// the input array will have only numbers
/*examples:
ascendingOrder([4, 3, 2, 1]); // [1, 2, 3, 4]
ascendingOrder([1, 2, 3, 4]); // [1, 2, 3, 4]
ascendingOrder([]); // []
*/

export const ascendingOrder = (numbersArray) => {};
// 4. create a function that takes an array of numbers and return sorted in descending order
// the input is an array of numbers (integers)
// the function should return an array of numbers sorted in descending order
// the function should return an array of numbers sorted in descending order
// if the input is an empty array, return []
// the input array will have only numbers
/*examples:
descendingOrder([4, 3, 2, 1]); // [4, 3, 2, 1]
descendingOrder([1, 2, 3, 4]); // [4, 3, 2, 1]
descendingOrder([]); // []
*/

export const descendingOrder = (numbersArray) => {};

// 5. create a function that takes an array of objects and return sorted by a key in ascending order
// the input is an array of objects
// the function should return an array of objects sorted by a key in ascending order
// the key will always be present in the object
// the input array will have only objects
// the key will be a string
// the value of the key will be a number
/*examples:
ascendingOrderByKey(
  [
    { name: "John", age: 23 },
    { name: "Jane", age: 24 },
    { name: "Doe", age: 21 },
  ],
  "age"
);
// [
//   { name: "Doe", age: 21 },
//   { name: "John", age: 23 },
//   { name: "Jane", age: 24 },
// ]
]    
ascendingOrderByKey([], "age"); // []
*/

export const ascendingOrderByKey = (objectsArray, key) => {
  const ascendingOrder = objectsArray.sort((a, b) => a.age - b.age);
  return ascendingOrder;
};

// 6. create a function that takes an array of objects and return sorted by a key in descending order
// the input is an array of objects
// the function should return an array of objects sorted by a key in descending order
// the key will always be present in the object
// the input array will have only objects
// the key will be a string
// the value of the key will be a number
/*examples:
descendingOrderByKey(
  [
    { name: "John", age: 23 },
    { name: "Jane", age: 24 },
    { name: "Doe", age: 21 },
  ],
  "age"
);  
[
 { name: "Jane", age: 24 },
{ name: "John", age: 23 },
{ name: "Doe", age: 21 },
]
descendingOrderByKey([], "age"); // []
*/

export const descendingOrderByKey = (objectsArray, key) => {};
// 7. create a function that takes an array of objects and return sorted by a key in ascending order
// if the key is not present in one of the objects, it should be at the end
// the input is an array of objects
// the function should return an array of objects sorted by a key in ascending order
// if  the key is not present in one of the objects, it should be at the end
// the input array will have only objects
// the key will be a string
// the value of the key will be a number
/*examples:
ascendingOrderByKey(
  [
    { name: "John", age: 23 },
    { name: "Jane", age: 24 },
    { name: "Doe", age: 21 },
  ],
  "age"
);      
[
 { name: "Doe", age: 21 },
 { name: "John", age: 23 },
 { name: "Jane", age: 24 },
]

ascendingOrderByKey(
  [
    { name: "John", age: 23 },
    { name: "Doe" },
    { name: "Jane", age: 24 },
   
  ],
  "age"
);  [
    { name: "John", age: 23 },
    { name: "Jane", age: 24 },
     { name: "Doe" },
]

ascendingOrderByKey([], "age"); // []
*/

export const ascendingOrderByKeyWithMissingKey = {};
