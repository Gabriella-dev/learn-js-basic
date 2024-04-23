import {
  doubleNumbers,
  stringifyNumbers,
  capitalizeNames,
} from "./array-map.js";

describe("doubleNumbers", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(doubleNumbers([])).toEqual([]);
  });

  test("should return an array of numbers that are doubles of the input array", () => {
    expect(doubleNumbers([2, 5, 100])).toEqual([4, 10, 200]);
    expect(doubleNumbers([2, 5, 100, 0])).toEqual([4, 10, 200, 0]);
  });
});

describe.skip("stringifyNumbers", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(stringifyNumbers([])).toEqual([]);
  });

  test("should return an array of strings representing the input array numbers", () => {
    expect(stringifyNumbers([2, 5, 100])).toEqual(["2", "5", "100"]);
  });
});

describe.skip("capitalizeNames", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(capitalizeNames([])).toEqual([]);
  });

  test("should return an array of names with each word capitalized", () => {
    const students = [
      { name: "john doe", age: 24 },
      { name: "jane smith", age: 34 },
      { name: "alexander the great", age: 23 },
    ];
    const expected = [
      { name: "John Doe", age: 24 },
      { name: "Jane Smith", age: 34 },
      { name: "Alexander The Great", age: 23 },
    ];
    expect(capitalizeNames(students)).toEqual(expected);
  });
});
