const { humanCatDogYears } = require("../src");

describe("humanCatDogYears" , () => {
    test("Return array with three results, element 1 is human years, element 2 cat years, element 3 is dog years", () => {
        expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    });
});
