'use strict';

function toBinaryString(input) {
    // Only change code below this line
    let out = '';
    let bit = 1;
    while (input >= bit) {
        out = (input & bit ? 1 : 0) + out;
        bit <<= 1;
    }
    return out || '0';
    // Only change code above this line
}


// Tests
test(toBinaryString(0), '0', 'zero');
test(toBinaryString(1), '1', 'one');
test(toBinaryString(2), '10', 'smallNumber');
test(toBinaryString(65), '1000001', 'mediumNumber');
test(toBinaryString(1032), '10000001000', 'largeNumber');

function test(actual, expected, testName = '') {
    if (actual !== expected) {
        const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
        console.error(errorMessage);
    } else {
        console.log(`Test ${testName} passed!`);
    }

}