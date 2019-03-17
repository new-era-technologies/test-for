Calculate countries population calculateCountriesPopulation

/*
 * Given an array of countries with their population.
 * Calculate total population of all countries.
 * 
 * [
 *   { name: 'Ukraine', population: 42 000 000},
 *   { name: 'Belarus', population: 9 500 000},
 *   { name: 'Moldova', population: 3 500 000},
 *   { name: 'Switzerland', population: 8 400 000}
 * ]
 * 
 * Total population = 42M + 9.5M + 3.5M + 8.4M = 63.4M
 */
function calculateCountriesPopulation(countries) {
  // Only change code below this line
  
  // Only change code above this line
}

// Tests
test(calculateCountriesPopulation([{ name: 'Ukraine', population: 42000000}]), 42000000, 'singleCountry');
test(calculateCountriesPopulation([]), 0, 'emptyArray');
test(calculateCountriesPopulation(
  [{ name: 'Ukraine', population: 42000000},
   { name: 'Belarus', population: 9500000},
   { name: 'Moldova', population: 3500000},
   { name: 'Switzerland', population: 8400000}]), 
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