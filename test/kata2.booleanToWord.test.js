const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns YES when passed TRUE", () => {
    expect(booleanToWord(true)).toBe("Yes")
  });

  test("returns NO when passed FALSE", () => {
    expect(booleanToWord(false)).toBe("No")
  });
});