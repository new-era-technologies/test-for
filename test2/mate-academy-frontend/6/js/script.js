'use strict';

function getUniqueLetters(first, second) {
    // Only change code below this line
    let a = [], diff = [];
    let a1 = first.toLowerCase().split('');
    let a2 = second.toLowerCase().split((''));

    for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (let e in a) {
        if (e !== ' ') {
            diff.push(e);
        }
    }

    return diff.join('');
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