import { groupByAge } from "./objects-basic";

describe("groupByAge", () => {
  it("should group objects by age", () => {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
      { name: "David", age: 40 },
      { name: "Eve", age: 30 },
      { name: "Frank", age: 50 },
    ];

    const expected = [
      { name: "Alice", age: 25 },
      { name: "Charlie", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Eve", age: 30 },
    ];

    const result = groupByAge(people);

    expect(result).toEqual(expected);
  });

  it("should return an empty array if there are no objects with the same age", () => {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 },
      { name: "David", age: 40 },
      { name: "Eve", age: 45 },
      { name: "Frank", age: 50 },
    ];

    const expected = [];

    const result = groupByAge(people);

    expect(result).toEqual(expected);
  });
});
