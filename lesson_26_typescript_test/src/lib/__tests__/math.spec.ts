import {
  sum,
  conditionalSum,
  reverseNum,
  alphabetOrder,
  convertUppercase,
  conditionalReturn,
} from "../math";

describe("Math libary", () => {
  describe("sum", () => {
    test(" sum math function should return of two arguments", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
  describe("conditinalSum", () => {
    test("should convert", () => {
      expect(conditionalSum("2", 5)).toBe(7);
    });
    test("should return sum of two arguments", () => {
      expect(conditionalSum(2, 5)).toBe(7);
    });
  });
  describe("conditionalReturn", () => {
    test("should return object key", () => {
      expect(conditionalReturn("Hideo Kojima", "Genius")).toBe(undefined);
    });
  });
  describe("reversNum", () => {
    test("Write a function to reverse a number", () => {
      expect(reverseNum(123)).toBe(321);
    });
  });
  describe("alphabetOrder", () => {
    test("returns a passed string with letters in alphabetical order", () => {
      expect(alphabetOrder("webmaster")).toBe("abeemrstw");
    });
  });
  describe("convertUppercase", () => {
    test("converts the first letter of each word of the string in upper case", () => {
      expect(convertUppercase("the quick brown fox")).toBe(
        "The Quick Brown Fox"
      );
    });
  });
});
