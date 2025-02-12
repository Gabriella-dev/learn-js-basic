## Objective:
Write a function that extracts all objects with the same age property from an array of objects.

## Instructions:

### 1. Create an Array of Objects:

Create an array called people that contains several objects. Each object should represent a person with name and age properties.

```json
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 40 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 50 }
];
```


### 2. Write the groupByAge Function:

Create a function named groupByAge that takes an array of objects as a parameter.
This function should group the objects by their age property.
The function should return a new array containing only the objects that share the same age property.

### 3. Implement the Logic to Group Objects by Age:

Use the reduce method to iterate through the array and group the objects by their age property.
Store the groups in an object where the keys are the ages and the values are arrays of objects with that age.

### 4. Extract and Return the Groups with Multiple Objects:

Iterate through the grouped object and extract the groups where there are multiple objects with the same age.
Push these objects into a result array and return it.

```json
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 40 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 50 }
];
```

this should return : 
```json
 [
      { name: 'Alice', age: 25 },
      { name: 'Charlie', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Eve', age: 30 },
      { name: 'David', age: 40 },
      { name: 'Frank', age: 50 }
    ]

```