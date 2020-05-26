/**
 * Solution 1 - Reverse array last to first
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Check if non-empty string is a palindrome
 *
 * @param {string} non-empty string
 * @returns {boolean} 
 */
function isPalindrome(string = '') {
    // Assertions
    console.assert(typeof string === 'string' && string !== '', 'Parameter should be a valid non-empty string');

    // Gracefully handle type and Falsy values
    if (typeof string !== 'string' || string === '') {
        console.error('Parameter should be a valid non-empty string');
        return false;
    }

    if (string.length === 1) {
        return true;
    }

    const reversedChars = [];

    for (let i = string.length - 1; i >= 0; i--) {
        reversedChars.push(string[i]);
    }

    return string.toLowerCase() === reversedChars.join('').toLowerCase();
}

/**
 * Solution 2 - Recursion
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Check if non-empty string is a palindrome
 *
 * @param {string} non-empty string
 * @returns {boolean} 
 */
// function isPalindrome(string = '', i = 0) {
function isPalindrome(string = '', i = 0) {
    // Gracefully handle type and Falsy values
    if (typeof string !== 'string' || string === '') {
        console.error('Parameter should be a valid non-empty string');
        return false;
    }

    const j = string.length - 1 - i;

    const firstChar = string[i];
    const lastChar = string[j];

    // Base case
    if (i >= j) {
        return true;
    }

    if (firstChar.toLowerCase() === lastChar.toLowerCase()) {
        return isPalindrome(string, i + 1);
    } else {
        return false;
    }
}

/**
 * Solution 3 - Pointers
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Check if non-empty string is a palindrome
 *
 * @param {string} non-empty string
 * @returns {boolean} 
 */
function isPalindrome(string = '') {
    // Assertions
    console.assert(typeof string === 'string' && string !== '', 'Parameter should be a valid non-empty string');

    // Gracefully handle type and Falsy values
    if (typeof string !== 'string' || string === '') {
        console.error('Parameter should be a valid non-empty string');
        return false;
    }

    if (string.length === 1) {
        return true;
    }

    for (let i = 0; i < string.length; i++) {
        const firstChar = string[i];
        const lastChar = string[string.length - 1 - i];

        if (firstChar.toLowerCase() !== lastChar.toLowerCase()) {
            return false;
        }
    }

    return true;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: isPalindrome('Wow'), expected: true },
    { assert: isPalindrome('Anna'), expected: true },
    { assert: isPalindrome('Kayak'), expected: true },
    { assert: isPalindrome('1abcba1'), expected: true },
    { assert: isPalindrome('AbCdcBa'), expected: true },
    { assert: isPalindrome('Repaper'), expected: true },
    { assert: isPalindrome('abcdefg'), expected: false },
    { assert: isPalindrome('Hello World'), expected: false },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: isPalindrome('a'), expected: true },
    { assert: isPalindrome('tattarrattat'), expected: true },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: isPalindrome(), expected: false },
    { assert: isPalindrome(0), expected: false },
    { assert: isPalindrome(''), expected: false },
    { assert: isPalindrome([]), expected: false },
    { assert: isPalindrome({}), expected: false },
    { assert: isPalindrome(NaN), expected: false },
    { assert: isPalindrome(null), expected: false },
    { assert: isPalindrome(false), expected: false },
    { assert: isPalindrome(new Set()), expected: false },
    { assert: isPalindrome(new Map()), expected: false },
    { assert: isPalindrome(undefined), expected: false },
];

// Run tests
testCases.forEach((test, index) => {
    const currentTest = `# Test ${index + 1}`;

    console.group(currentTest);
    console.log('Actual: ', test.assert);
    console.log('Expected: ', test.expected);
    console.log(test.assert === test.expected ? '🤘 Test PASSED 🤘' : '👎 Test FAILED 👎', '\n');
    console.groupEnd(currentTest);
});

