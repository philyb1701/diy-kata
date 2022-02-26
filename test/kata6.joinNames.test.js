const { joinNames } = require("../src");

/*
describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([Bart, Lisa, Maggie]).toEqual("Bart, Lisa & Maggie"))
  });
});
*/

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: "Bart"}, {name: "Lisa"}, {name: "Maggie"}])).toBe("Bart, Lisa & Maggie")
    expect(joinNames([{name: "Virgil"}, {name: "Mo"}, {name: "Sadio"}, {name: "Diogo"}, {name: "Hendo"}])).toBe("Virgil, Mo, Sadio, Diogo & Hendo")
    expect(joinNames([{name: "Libby"}, {name: "Ruby"}])).toEqual("Libby & Ruby")
  });
});

