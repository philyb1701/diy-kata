const humanCatDogYears = number => {
    catYears = 0;
    dogYears = 0;
    if (number === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (number === 2) {
        catYears = 24;
        dogYears = 24;
    } else if (number >= 3) {
        catYears = 4 * (number - 2) + 24; // -2 for the 2 years above. 
        dogYears = 5 * (number - 2) + 24; // Same as above.
    }
    return [number, catYears, dogYears]
};
//The above 3 works, but I feel needs refactoring.
//Refactoring ideas to use incremental operator for the variables, but I am not quite there yet. Maybe for loop using increment?

module.exports = humanCatDogYears;
