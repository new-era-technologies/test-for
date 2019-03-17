'use strict';

function hasAllLetters(pattern, phrase) {
    // Only change code below this line
    let newPhrase = phrase.toLowerCase().replace(/\s/g, '');
    let patternToLower = pattern.toLowerCase();
    let newPattern = [...patternToLower];
    return [...newPhrase].every(i => {
        let ind = newPattern.indexOf(i);
        if (~ind) {
            newPattern.splice(ind, 0);
            return true;
        }
    });
    // Only change code above this line
}


// Tests
test(hasAllLetters('abcdef', 'Dead Beef'), true, 'Dead Beef');
test(hasAllLetters('abcdef', 'Some phrase'), false, 'Some phrase');
test(hasAllLetters('Happy New Year', 'nyh'), true, 'nyh');


function test(actual, expected, testName = '') {
    if (actual !== expected) {
        const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
        console.error(errorMessage);
    } else {
        console.log(`Test ${testName} passed!`);
    }
}