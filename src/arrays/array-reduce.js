/*
solve this problem using .reduce() method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

// 1. Write a function that takes an array of numbers and returns the sum of all the numbers:
// the input is an array of numbers
// if the input is an empty array, return 0
// the input array will have only numbers
/*  examples:   
sum([2, 5, 100]); // 107
sum([2, 5, 100, 0]); // 107
sum([]); // 0
*/
export const sum = (numbersArray) => {
  const sumOfArrays = numbersArray.reduce((acc, current) => acc + current, 0);
  return sumOfArrays;
};

// 2. Write a function that takes an array of voter objects and a count of how many people voted:
// the input is an array of voter objects
// each voter object has a property 'voted' that is either true or false
// return the number of voters who voted
/*  examples:
const voters = [
  {name: 'Bob', voted: true},
  {name: 'Jake', voted: true},
  {name: 'Kate', voted: false}
];
voterResults(voters); // 2
*/

export const voterResults = (voters) => {
  const votersNum = voters.reduce((count, voter) => count + voter.voted, 0);

  return votersNum;
};

// 3. Write a function that takes an array of arrays and returns an array of the sums of each inner array:
// the input is an array of arrays
// each inner array will have only numbers
// return an array of the sums of each inner array
/*  examples:
sumOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [6, 15, 24]
sumOfArrays([[1, 2, 3], [4, 5, 6]]); // [6, 15]
*/

//hint: using map and above sum function

export const sumOfArrays = (arrays) => {
  return arrays.map((x) => sum(x));
};

// 4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once:
// the input is an array of objects
// each object has a property 'price' that is a number
// return the total cost of all items
/*  examples:

const wishlist = [
    {title: 'Tesla Model S', price: 90000},
    {title: '4 carat diamond ring', price: 45000},
    {title: 'Fancy hacky Sack', price: 5},
    {title: 'Gold fidgit spinner', price: 2000},
    {title: 'A second Tesla Model S', price: 90000}
    ];
    shoppingSpree(wishlist); // 225005
*/

export const shoppingSpree = (wishlist) => {
  const total = wishlist.reduce((acc, curr) => acc + curr.price, 0);

  return total;
};

// 5. Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
// the input is an array of objects
// each object has a property 'age' that is a number
// each object has a property 'voted' that is either true or false
// return an object with 6 properties
// the first 3 properties are the number of voters in each age range
// the last 3 properties are the number of voters in each age range who voted
/*  examples:

const voters = [

    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false}
    ];

    voterTurnout(voters) returns:
    { numYoungVotes: 1, 
    numYoungPeople: 4, 
    numMidVotesPeople: 3, 
    numMidsPeople: 4, 
    numOldVotesPeople: 3, 
    numOldsPeople: 4 }
*/

export const voterTurnout = (voters) => {
  const result = voters.reduce(
    (acc, cur) => {
      if (cur.age >= 18 && cur.age <= 25) {
        acc.numYoungPeople += 1;
        if (cur.voted === true) {
          acc.numYoungVotes += 1;
        }
      } else if (cur.age >= 26 && cur.age <= 35) {
        acc.numMidsPeople += 1;
        if (cur.voted === true) {
          acc.numMidVotesPeople += 1;
        }
      } else if (cur.age >= 36) {
        acc.numOldsPeople += 1;
        if (cur.voted === true) {
          acc.numOldVotesPeople += 1;
        }
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
  return result;
};
