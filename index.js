const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns
// a function that will multiply a fare for a ride accordingly. For example, if createFareMultiplier() receives
// an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
// createFareMultiplier()
// 6) returns a function
// 7) should multiply a given value using the created multiplier

const createFareMultiplier = function multiply(fare) {
    return function(price) {
        return fare * price;
    }
}

// fareDoubler()
// 8) is a function
// 9) doubles fares
// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument
// and doubles it.

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

/*
selectDifferentDrivers(arrayOfDrivers, function)
12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
*/
// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers()
// or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first
// two drivers or the last two drivers.

const selectDifferentDrivers = function (arrayOfDrivers, returnEitherDrivers) {
    if (returnEitherDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
  }