import {
  evenNumbers,
  shortStrings,
  olderThan18,
  clubMembers,
} from "./array-filter";

describe.skip("evenNumbers", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(evenNumbers([])).toEqual([]);
  });

  test("should return an array of even numbers from the input array", () => {
    expect(evenNumbers([2, 5, 100])).toEqual([2, 100]);
    expect(evenNumbers([2, 5, 100, 0])).toEqual([2, 100, 0]);
  });
});

describe.skip("shortStrings", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(shortStrings([])).toEqual([]);
  });

  test("should return an array of strings with length 5 or fewer", () => {
    expect(
      shortStrings(["dog", "wolf", "by", "family", "eaten", "camping"])
    ).toEqual(["dog", "wolf", "by", "eaten"]);
    expect(
      shortStrings(["dog", "wolf", "by", "family", "eaten", "camping", ""])
    ).toEqual(["dog", "wolf", "by", "eaten", ""]);
  });
});

describe.skip("olderThan18", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(olderThan18([])).toEqual([]);
  });

  test("should return an array of names of students older than 18", () => {
    expect(
      olderThan18([
        { name: "John", age: 16 },
        { name: "Jane", age: 24 },
        { name: "Jim", age: 15 },
      ])
    ).toEqual(["Jane"]);
    expect(
      olderThan18([
        { name: "John", age: 16 },
        { name: "Jane", age: 24 },
        { name: "Jim", age: 15 },
        { name: "Jill", age: 19 },
      ])
    ).toEqual(["Jane", "Jill"]);
  });
});

describe.skip("clubMembers", () => {
  test("should return an empty array if the input is an empty array", () => {
    expect(clubMembers([])).toEqual([]);
  });

  test("should return an array of people who are members of the club", () => {
    expect(
      clubMembers([
        { name: "John", member: true },
        { name: "Jane", member: false },
        { name: "Jim", member: false },
      ])
    ).toEqual([{ name: "John", member: true }]);

    expect(
      clubMembers([
        { name: "John", member: true },
        { name: "Jane", member: false },
        { name: "Jim", member: false },
        { name: "Jill", member: true },
      ])
    ).toEqual([
      { name: "John", member: true },
      { name: "Jill", member: true },
    ]);
  });
});
