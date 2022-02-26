const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits([5,4,3,2,1])).toStrictEqual([1,2,3,4,5]); //If it should pass with deep equality, replace "toBe" with "toStrictEqual"
  });
});