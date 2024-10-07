import {
  sum,
  voterResults,
  sumOfArrays,
  shoppingSpree,
  voterTurnout,
} from "./array-reduce";

describe("sum", () => {
  test("should return the sum of all numbers in the array", () => {
    expect(sum([2, 5, 100])).toBe(107);
    expect(sum([2, 5, 100, 0])).toBe(107);
  });

  test("should return 0 for an empty array", () => {
    expect(sum([])).toBe(0);
  });
});

describe("voterResults", () => {
  test("should return the number of voters who voted", () => {
    const voters = [
      { name: "Bob", voted: true },
      { name: "Jake", voted: true },
      { name: "Kate", voted: false },
    ];
    expect(voterResults(voters)).toBe(2);
  });

  test("should return 0 if no voters voted", () => {
    const voters = [
      { name: "Bob", voted: false },
      { name: "Jake", voted: false },
      { name: "Kate", voted: false },
    ];
    expect(voterResults(voters)).toBe(0);
  });

  test("should return 0 for an empty array", () => {
    const voters = [];
    expect(voterResults(voters)).toBe(0);
  });
});

describe("sumOfArrays", () => {
  test("should return an array of the sums of each inner array", () => {
    expect(
      sumOfArrays([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([6, 15, 24]);
    expect(
      sumOfArrays([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toEqual([6, 15]);
  });
});

describe.skip("shoppingSpree", () => {
  test("should return the total cost of all items", () => {
    const wishlist = [
      { title: "Tesla Model S", price: 90000 },
      { title: "4 carat diamond ring", price: 45000 },
      { title: "Fancy hacky Sack", price: 5 },
      { title: "Gold fidgit spinner", price: 2000 },
      { title: "A second Tesla Model S", price: 90000 },
    ];
    expect(shoppingSpree(wishlist)).toBe(227005);
  });

  test("should return 0 for an empty wishlist", () => {
    const wishlist = [];
    expect(shoppingSpree(wishlist)).toBe(0);
  });
});

describe.skip("voterTurnout", () => {
  test("should return an object with the correct number of voters in each age range and the number of voters who voted", () => {
    const voters = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zach", age: 19, voted: false },
      { name: "Elena", age: 19, voted: true },
    ];

    const result = voterTurnout(voters);

    expect(result).toEqual({
      numYoungVotes: 2,
      numYoungPeople: 5,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4,
    });
  });
});
