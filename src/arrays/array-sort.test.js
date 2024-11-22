import {
  alphabeticalOrder,
  reverseAlphabeticalOrder,
  ascendingOrder,
  descendingOrder,
  ascendingOrderByKey,
  descendingOrderByKey,
  ascendingOrderByKeyWithMissingKey,
} from "./array-sort";

describe("alphabeticalOrder", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(alphabeticalOrder([])).toEqual([]);
  });

  test("should return an array of strings sorted in alphabetical order", () => {
    expect(
      alphabeticalOrder(["dog", "wolf", "by", "family", "eaten", "camping"])
    ).toEqual(["by", "camping", "dog", "eaten", "family", "wolf"]);
    expect(
      alphabeticalOrder(["dog", "wolf", "by", "family", "eaten", "camping", ""])
    ).toEqual(["", "by", "camping", "dog", "eaten", "family", "wolf"]);
  });
});

describe("reverseAlphabeticalOrder", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(reverseAlphabeticalOrder([])).toEqual([]);
  });

  test("should return an array of strings sorted in reverse alphabetical order", () => {
    expect(
      reverseAlphabeticalOrder([
        "dog",
        "wolf",
        "by",
        "family",
        "eaten",
        "camping",
      ])
    ).toEqual(["wolf", "family", "eaten", "dog", "camping", "by"]);
    expect(
      reverseAlphabeticalOrder([
        "dog",
        "wolf",
        "by",
        "family",
        "eaten",
        "camping",
        "",
      ])
    ).toEqual(["wolf", "family", "eaten", "dog", "camping", "by", ""]);
  });
});

  test("should return an empty array if the input is an empty array", () => {
    expect(ascendingOrder([])).toEqual([]);
  });

  test("should return an array of numbers sorted in ascending order", () => {
    expect(ascendingOrder([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(ascendingOrder([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(ascendingOrder([1, 11, 3, 4, 44, 33, 2, 22])).toEqual([
      1, 2, 3, 4, 11, 22, 33, 44,
    ]);
  });
;

describe("descendingOrder", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(descendingOrder([])).toEqual([]);
  });

  test("should return an array of numbers sorted in descending order", () => {
    expect(descendingOrder([4, 3, 2, 1])).toEqual([4, 3, 2, 1]);
    expect(descendingOrder([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(descendingOrder([1, 11, 3, 4, 44, 33, 2, 22])).toEqual([
      44, 33, 22, 11, 4, 3, 2, 1,
    ]);
  });
});

describe("ascendingOrderByKey", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(ascendingOrderByKey([], "age")).toEqual([]);
  });

  test("should return an array of objects sorted by a key in ascending order", () => {
    expect(
      ascendingOrderByKey(
        [
          { name: "dog", age: 3 },
          { name: "wolf", age: 4 },
          { name: "by", age: 1 },
          { name: "family", age: 2 },
          { name: "eaten", age: 11 },
          { name: "camping", age: 6 },
        ],
        "age"
      )
    ).toEqual([
      { name: "by", age: 1 },
      { name: "family", age: 2 },
      { name: "dog", age: 3 },
      { name: "wolf", age: 4 },
      { name: "camping", age: 6 },
      { name: "eaten", age: 11 },
    ]);
  });
});

describe("descendingOrderByKey", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(descendingOrderByKey([], "age")).toEqual([]);
  });

  test("should return an array of objects sorted by a key in descending order", () => {
    expect(
      descendingOrderByKey(
        [
          { name: "dog", age: 3 },
          { name: "wolf", age: 4 },
          { name: "by", age: 1 },
          { name: "family", age: 2 },
          { name: "eaten", age: 11 },
          { name: "camping", age: 6 },
        ],
        "age"
      )
    ).toEqual([
      { name: "eaten", age: 11 },
      { name: "camping", age: 6 },
      { name: "wolf", age: 4 },
      { name: "dog", age: 3 },
      { name: "family", age: 2 },
      { name: "by", age: 1 },
    ]);
  });
});

describe("ascendingOrderByKeyWithMissingKey", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(ascendingOrderByKeyWithMissingKey([], "age")).toEqual([]);
  });

  test("should return an array of objects sorted by a key in ascending order", () => {
    expect(
      ascendingOrderByKeyWithMissingKey(
        [
          { name: "dog", age: 3 },
          { name: "wolf", age: 4 },
          { name: "by", age: 1 },
          { name: "family", age: 2 },
          { name: "eaten", age: 11 },
          { name: "camping", age: 6 },
          { name: "missing" },
        ],
        "age"
      )
    ).toEqual([
      { name: "by", age: 1 },
      { name: "family", age: 2 },
      { name: "dog", age: 3 },
      { name: "wolf", age: 4 },
      { name: "camping", age: 6 },
      { name: "eaten", age: 11 },
      { name: "missing" },
    ]);
  });
});
