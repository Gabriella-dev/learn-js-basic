import { doubleNumbers, stringifyNumbers } from "./array-map.js";

describe.skip("doubleNumbers", () => {
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
