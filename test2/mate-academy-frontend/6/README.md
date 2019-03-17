Find all letters (ignoring case) which are present only in one string but not the other getUniqueLetters

/**
 * Given two strings, first and second. Find all letters (ignoring case)
 * which are present only in one string but not the other.
 */
function getUniqueLetters(first, second) {
  // Only change code below this line
  
  // Only change code above this line
}


// Tests
test(getUniqueLetters('aBcdef', 'CdEfgh'), 'abgh');
test(getUniqueLetters('aAAaabBb', 'ab'), '');
test(getUniqueLetters('Happy New Year', 'nyh'), 'apewr');

function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: "${actual}" is not equal to expected "${expected}"`;
    console.error(errorMessage);  
  } else {
    console.log(`Test ${testName} passed!`);
  }
}