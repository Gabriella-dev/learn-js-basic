import {
  add,
  formatNumber,
  findHighestValue,
  getGCD,
  isNaturalNumber,
  factorial,
  sum,
  calculateAverage,
  calculateNthRoot,
  convertToNegative,
  calculatePercentage,
  checkNumberType,
  sumDigits,
  findLowestValue,
} from "./numbers.js";

describe("add", () => {
  test("should return the sum of two numbers", () => {
    expect(add(2, 3)).toEqual(5);
    expect(add(-1, 5)).toEqual(4);
    expect(add(0, 0)).toEqual(0);
    expect(add(10, -5)).toEqual(5);
    expect(add(-50, -5)).toEqual(-55);
  });
});

describe("formatNumber", () => {
  test("should format the number with the specified decimals", () => {
    expect(formatNumber(3.14159, 2)).toEqual("3.14");
    expect(formatNumber(10, 0)).toEqual("10");
    expect(formatNumber(123.456, 3)).toEqual("123.456");
    expect(formatNumber(0.1, 5)).toEqual("0.10000");
    expect(formatNumber(-5.6789, 4)).toEqual("-5.6789");
  });
});

describe("findHighestValue", () => {
  test("should return the highest value in the array", () => {
    expect(findHighestValue([1, 2, 3, 4, 5])).toEqual(5);
    expect(findHighestValue([-1, -2, -3, -4, -5])).toEqual(-1);
    expect(findHighestValue([10, 20, 30, 40, 50])).toEqual(50);
    expect(findHighestValue([0, 0, 0, 0, 0])).toEqual(0);
    expect(findHighestValue([-10, -20, -30, -40, -50])).toEqual(-10);
  });
});

describe("findLowestValue", () => {
  test("should return the lowest value in the array", () => {
    expect(findLowestValue([1, 2, 3, 4, 5])).toEqual(1);
    expect(findLowestValue([-1, -2, -3, -4, -5])).toEqual(-5);
    expect(findLowestValue([10, 20, 30, 40, 50])).toEqual(10);
    expect(findLowestValue([0, 0, 0, 0, 0])).toEqual(0);
    expect(findLowestValue([-10, -20, -30, -40, -50])).toEqual(-50);
  });
});

describe("getGCD", () => {
  test("should return the greatest common divisor of two numbers", () => {
    expect(getGCD(10, 25)).toEqual(5);
    expect(getGCD(14, 21)).toEqual(7);
    expect(getGCD(18, 24)).toEqual(6);
    expect(getGCD(7, 13)).toEqual(1);
    expect(getGCD(0, 5)).toEqual(5);
  });
});

describe("isNaturalNumber", () => {
  test("should return true for natural numbers", () => {
    expect(isNaturalNumber(1)).toBe(true);
    expect(isNaturalNumber(10)).toBe(true);
    expect(isNaturalNumber(100)).toBe(true);
  });

  test("should return false for non-natural numbers", () => {
    expect(isNaturalNumber(0)).toBe(false);
    expect(isNaturalNumber(-1)).toBe(false);
    expect(isNaturalNumber(3.14)).toBe(false);
    expect(isNaturalNumber("5")).toBe(false);
    expect(isNaturalNumber(true)).toBe(false);
  });
});

describe("factorial", () => {
  test("should return the factorial of a number", () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(5)).toEqual(120);
    expect(factorial(10)).toEqual(3628800);
  });
});

describe("sum", () => {
  test("should return the sum of all numbers in the array", () => {
    expect(sum([1, 2, 3, 4, 5])).toEqual(15);
    expect(sum([-1, -2, -3, -4, -5])).toEqual(-15);
    expect(sum([10, 20, 30, 40, 50])).toEqual(150);
    expect(sum([0, 0, 0, 0, 0])).toEqual(0);
    expect(sum([-10, -20, -30, -40, -50])).toEqual(-150);
    expect(sum([1, 2, 3, 4, 5, -15])).toEqual(0);
    expect(sum([1.34, 2, 3, 4, 5, -15.1, 10])).toEqual(10.24);
  });
});

describe("calculateAverage", () => {
  test("should return 0 for an empty array", () => {
    expect(calculateAverage([])).toEqual(0);
  });
  test("should return the average of the numbers in the array", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toEqual(3);
    expect(calculateAverage([-1, -2, -3, -4, -5])).toEqual(-3);
    expect(calculateAverage([10, 20, 30, 40, 50])).toEqual(30);
    expect(calculateAverage([0, 0, 0, 0, 0])).toEqual(0);
    expect(calculateAverage([-10, -20, -30, -40, -50])).toEqual(-30);
    expect(calculateAverage([1, 2, 3, 4, 5, -15])).toEqual(0);
    expect(calculateAverage([1.34, 2, 3, 4, 5, -15.1, 10])).toEqual(1.46);
  });
});

describe("calculateNthRoot", () => {
  test("should return the nth root of a number", () => {
    expect(calculateNthRoot(16, 2)).toEqual(4);
    expect(calculateNthRoot(27, 3)).toEqual(3);
    expect(calculateNthRoot(81, 4)).toEqual(3);
    expect(calculateNthRoot(3125, 5)).toEqual(5);
    expect(calculateNthRoot(256, 8)).toEqual(2);
  });
});

describe("convertToNegative", () => {
  test("should convert a positive number to a negative number", () => {
    expect(convertToNegative(5)).toEqual(-5);
    expect(convertToNegative(10)).toEqual(-10);
    expect(convertToNegative(100)).toEqual(-100);
  });

  test("should convert a negative number to a negative number", () => {
    expect(convertToNegative(-5)).toEqual(-5);
    expect(convertToNegative(-10)).toEqual(-10);
    expect(convertToNegative(-100)).toEqual(-100);
  });

  test("should convert zero to zero", () => {
    expect(convertToNegative(0)).toEqual(0);
  });
});

describe("calculatePercentage", () => {
  test("should calculate the percentage of a number", () => {
    expect(calculatePercentage(100, 50)).toEqual(50);
    expect(calculatePercentage(200, 25)).toEqual(50);
    expect(calculatePercentage(75, 10)).toEqual(7.5);
    expect(calculatePercentage(500, 75)).toEqual(375);
    expect(calculatePercentage(0, 50)).toEqual(0);
  });
});

describe("checkNumberType", () => {
  test("should return 'It is a whole number.' for whole numbers", () => {
    expect(checkNumberType(1)).toEqual("It is a whole number.");
    expect(checkNumberType(10)).toEqual("It is a whole number.");
    expect(checkNumberType(100)).toEqual("It is a whole number.");
  });

  test("should return 'Number has a decimal place.' for numbers with decimal places", () => {
    expect(checkNumberType(3.14)).toEqual("Number has a decimal place.");
    expect(checkNumberType(5.6789)).toEqual("Number has a decimal place.");
  });
});

describe("sumDigits", () => {
  test("should return the sum of the digits of a positive number", () => {
    expect(sumDigits(123)).toEqual(6);
    expect(sumDigits(456)).toEqual(15);
    expect(sumDigits(789)).toEqual(24);
  });

  test("should return the sum of the digits of a negative number", () => {
    expect(sumDigits(-123)).toEqual(6);
    expect(sumDigits(-456)).toEqual(15);
    expect(sumDigits(-789)).toEqual(24);
  });

  test("should return 0 for the sum of the digits of 0", () => {
    expect(sumDigits(0)).toEqual(0);
  });
});