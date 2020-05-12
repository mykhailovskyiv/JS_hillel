import { sum, conditionalSum } from "../math";

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
});
