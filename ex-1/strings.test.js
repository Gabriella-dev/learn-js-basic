import { helloWorld, isBlank, stringToArray } from "./strings.js";

describe("helloWorld", () => {
  test("should return hello world", () => {
    expect(helloWorld()).toEqual("hello world");
  });
});

describe("isBlank", () => {
  test("returns true for an empty string", () => {
    expect(isBlank("")).toBe(true);
  });

  test("returns true for a string with only spaces", () => {
    expect(isBlank("    ")).toBe(true);
  });

  test("returns false for a non-blank string", () => {
    expect(isBlank("Hello")).toBe(false);
  });

  test("returns false for a string with non-space characters", () => {
    expect(isBlank("   Hello   ")).toBe(false);
  });
});

describe("stringToArray", () => {
  test("converts a multi-word string to an array of words", () => {
    expect(stringToArray("Hello World JavaScript")).toEqual([
      "Hello",
      "World",
      "JavaScript",
    ]);
  });

  test("converts a single word string to an array with one element", () => {
    expect(stringToArray("Hello")).toEqual(["Hello"]);
  });

  test("returns an empty array for an empty string", () => {
    expect(stringToArray("")).toEqual([]);
  });

  test("handles strings with multiple spaces correctly", () => {
    expect(stringToArray("Hello   World")).toEqual(["Hello", "", "", "World"]);
  });
});
