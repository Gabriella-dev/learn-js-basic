import {
  isArray,
  cloneArray,
  getLastElements,
  joinArray,
  mostFrequentItem,
} from "./arrays.js";

describe("isArray", () => {
  test("should return true if input is an array", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(["a", "b", "c"])).toBe(true);
  });

  test("should return false if input is not an array", () => {
    expect(isArray(123)).toBe(false);
    expect(isArray("hello")).toBe(false);
    expect(isArray({ key: "value" })).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });
});

describe("cloneArray", () => {
  test("should return a new array with the same elements", () => {
    const input = [1, 2, 3];
    const clonedArray = cloneArray(input);
    expect(clonedArray).toEqual(input);
    expect(clonedArray).not.toBe(input);
  });

  test("should return an empty array if input is an empty array", () => {
    const input = [];
    const clonedArray = cloneArray(input);
    expect(clonedArray).toEqual([]);
    expect(clonedArray).not.toBe(input);
  });

  test("should return a new array with the same elements if input is a nested array", () => {
    const input = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const clonedArray = cloneArray(input);
    expect(clonedArray).toEqual(input);
    expect(clonedArray).not.toBe(input);
  });
});

describe.skip("getLastElements", () => {
  test("should return all elements of the array if 'n' is not provided", () => {
    const input = ["ant", "bison", "camel", "duck", "elephant"];
    const result = getLastElements(input);
    expect(result).toEqual(input);
  });

  test("should return the last 'n' elements of the array if 'n' is provided", () => {
    const input = ["ant", "bison", "camel", "duck", "elephant"];
    const result = getLastElements(input, 3);
    expect(result).toEqual(["duck", "elephant"]);
  });
});

describe.skip("joinArray", () => {
  test("should join the elements of the array with the specified separator", () => {
    const input = ["apple", "banana", "cherry"];
    const separator = "-";
    const result = joinArray(input, separator);
    expect(result).toBe("apple-banana-cherry");
  });

  test("should join the elements of the array with an empty string separator by default", () => {
    const input = ["r", "e", "d"];
    const result = joinArray(input, "");
    expect(result).toBe("red");
  });

  test("should return an empty string if the input array is empty", () => {
    const input = [];
    const separator = "-";
    const result = joinArray(input, separator);
    expect(result).toBe("");
  });
});

describe.skip("mostFrequentItem", () => {
  test("should return the most frequent item in the array", () => {
    const input = [1, 2, 3, 2, 1, 2, 3, 3, 3];
    const result = mostFrequentItem(input);
    expect(result).toBe(3);
  });

  test("should return the first most frequent item if there are multiple", () => {
    const input = [1, 2, 3, 2, 1, 2, 3, 3, 3, 2];
    const result = mostFrequentItem(input);
    expect(result).toBe(2);
  });

  test("should return the item if the array contains only one element", () => {
    const input = [1];
    const result = mostFrequentItem(input);
    expect(result).toBe(1);
  });

  test("should return 'The array has no elements' if the array is empty", () => {
    const input = [];
    const result = mostFrequentItem(input);
    expect(result).toBe("The array has no elements");
  });
});
