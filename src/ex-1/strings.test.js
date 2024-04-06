import {
  helloWorld,
  isBlank,
  stringToArray,
  isString,
  capitalizeFirstLetter,
  capitalizeEachWord,
  camelCase,
  searchWord,
} from "./strings.js";

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

describe.skip("stringToArray", () => {
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

describe.skip("isString", () => {
  test("returns true for a string input", () => {
    expect(isString("Hello")).toBe(true);
  });

  test("returns false for a non-string input", () => {
    expect(isString(123)).toBe(false);
  });

  test("returns false for an empty input", () => {
    expect(isString()).toBe(false);
  });

  test("returns false for a null input", () => {
    expect(isString(null)).toBe(false);
  });

  test("returns false for a object input", () => {
    expect(isString({})).toBe(false);
  });
});

describe.skip("capitalizeFirstLetter", () => {
  test("capitalizes the first letter of a word", () => {
    expect(capitalizeFirstLetter("hello")).toEqual("Hello");
    expect(capitalizeFirstLetter("world")).toEqual("World");
    expect(capitalizeFirstLetter("javascript")).toEqual("Javascript");
  });

  test("returns an empty string if input is an empty string", () => {
    expect(capitalizeFirstLetter("")).toEqual("");
  });

  test("returns the same string if the first letter is already capitalized", () => {
    expect(capitalizeFirstLetter("Hello")).toEqual("Hello");
    expect(capitalizeFirstLetter("World")).toEqual("World");
    expect(capitalizeFirstLetter("Javascript")).toEqual("Javascript");
  });
});

describe.skip("capitalizeEachWord", () => {
  test("capitalizes each word in a sentence", () => {
    expect(capitalizeEachWord("hello world")).toEqual("Hello World");
    expect(capitalizeEachWord("javascript is awesome")).toEqual(
      "Javascript Is Awesome"
    );
    expect(capitalizeEachWord("this is a test")).toEqual("This Is A Test");
  });

  test("returns an empty string if input is an empty string", () => {
    expect(capitalizeEachWord("")).toEqual("");
  });

  test("handles strings with multiple spaces correctly", () => {
    expect(capitalizeEachWord("hello   world")).toEqual("Hello   World");
    expect(capitalizeEachWord("  javascript   is   awesome  ")).toEqual(
      "  Javascript   Is   Awesome  "
    );
  });
});

describe.skip("camelCase", () => {
  test("converts a sentence to camel case", () => {
    expect(camelCase("hello world")).toEqual("helloWorld");
    expect(camelCase("javascript is awesome")).toEqual("javascriptIsAwesome");
    expect(camelCase("this is a test")).toEqual("thisIsATest");
  });

  test("converts a single word to camel case", () => {
    expect(camelCase("hello")).toEqual("hello");
    expect(camelCase("world")).toEqual("world");
    expect(camelCase("javascript")).toEqual("javascript");
  });

  test("returns an empty string for an empty input", () => {
    expect(camelCase("")).toEqual("");
  });

  test("handles strings with multiple spaces correctly", () => {
    expect(camelCase("hello   world")).toEqual("helloWorld");
    expect(camelCase("  javascript   is   awesome  ")).toEqual(
      "javascriptIsAwesome"
    );
  });
});

describe.skip("searchWord", () => {
  test("returns the number of times a word is found in a sentence", () => {
    expect(searchWord("Hello World", "World")).toEqual(
      "The word World was found 1 times."
    );
    expect(searchWord("Hello World World", "World")).toEqual(
      "The word World was found 2 times."
    );
    expect(searchWord("Hello World World World", "World")).toEqual(
      "The word World was found 3 times."
    );
  });

  test("returns an error message if the word is an empty string", () => {
    expect(searchWord("Hello World", "")).toEqual(
      "You are searching for an empty string. Please provide a valid word."
    );
  });

  test("returns an error message if the sentence is an empty string", () => {
    expect(searchWord("", "World")).toEqual(
      "You are searching for a word in an empty string. Please provide a valid sentence."
    );
  });

  test("returns an error message if the word is not found in the sentence", () => {
    expect(searchWord("Hello World", "Javascript")).toEqual(
      "The word Javascript does not exist in the sentence."
    );
  });
});
