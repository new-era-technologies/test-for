'use strict';

function calculateCountriesPopulation(countries) {
    // Only change code below this line
    let totalPopulation = 0;
    for (let i = 0; i < countries.length; i++) {
        totalPopulation += countries[i].population;
    }
    return totalPopulation;
    // Only change code above this line
}

// Tests
test(calculateCountriesPopulation([{name: 'Ukraine', population: 42000000}]), 42000000, 'singleCountry');
test(calculateCountriesPopulation([]), 0, 'emptyArray');
test(calculateCountriesPopulation(
    [{name: 'Ukraine', population: 42000000},
        {name: 'Belarus', population: 9500000},
        {name: 'Moldova', population: 3500000},
        {name: 'Switzerland', population: 8400000}]),
    63400000,
    'multipleCountries');


function test(actual, expected, testName = '') {
    if (actual !== expected) {
        const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
        console.error(errorMessage);
    } else {
        console.log(`Test ${testName} passed!`);
    }
}