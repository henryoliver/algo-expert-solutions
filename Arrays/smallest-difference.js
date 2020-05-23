// Smallest Difference

/**
 * Solution 1 - Brute force (aka: Naive)
 *
 * Complexity Analysis
 * O(n^2) time | O(1) space
 *
 * @param {array} arrayOne - non-empty array of integers
 * @param {array} arrayTwo - non-empty array of integers
 * @returns {array} array containing these two numbers
 */
function smallestDifference(arrayOne = [], arrayTwo = []) {
    let closestPair = [];
    let closestNumber = Infinity;
    
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            const absoluteDiff = Math.abs(arrayOne[i] - arrayTwo[j]);

            if (absoluteDiff < closestNumber) {
                closestNumber = absoluteDiff;
                closestPair = [arrayOne[i], arrayTwo[j]];
            }
        }
    }

    return closestPair;
}

/**
 * Solution 2 - Sorting along with the two-pointer sliding window approach
 *
 * Complexity Analysis
 * O(n log(n) + m log(m)) time | O(1) space
 *
 * @param {array} arrayOne - non-empty array of integers
 * @param {array} arrayTwo - non-empty array of integers
 * @returns {array} array containing these two numbers
 */
function smallestDifference(arrayOne = [], arrayTwo = []) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let closestPair = [];
    let closestNumber = Infinity;

    let arrayOnePointer = 0;
    let arrayTwoPointer = 0;

    while (arrayOnePointer < arrayOne.length && arrayTwoPointer < arrayTwo.length) {
        let firstNumber = arrayOne[arrayOnePointer];
        let secondNumber = arrayTwo[arrayTwoPointer];
        let currentAbsDiff = Math.abs(firstNumber - secondNumber);

        if (currentAbsDiff < closestNumber) {
            closestNumber = currentAbsDiff;
            closestPair = [firstNumber, secondNumber];
        }

        if (firstNumber < secondNumber) {
            arrayOnePointer++;
        } else if (secondNumber < firstNumber) {
            arrayTwoPointer++;
        } else {
            closestPair = [firstNumber, secondNumber];
            break;
        }
    }

    return closestPair;
}


// Test cases (black box - unit testing)
const testCases = [
    { assert: smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]), expected: [28, 26] },
    { assert: smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]), expected: [20, 17] },
    { assert: smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031]), expected: [25, 1005] },
    
    // Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { assert: smallestDifference(), expected: [] },
    { assert: smallestDifference([], []), expected: [] },
    { assert: smallestDifference([0]), expected: [] },
    { assert: smallestDifference([], [0]), expected: [] },

    // Extremes
    { assert: smallestDifference([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]), expected: [530, 530] }
];

// Run tests
testCases.forEach((test, index) => {
    const currentTest = `# Test ${index + 1}`;

    console.group(currentTest);
    console.log('Actual: ', test.assert);
    console.log('Expected: ', test.expected);
    console.log(JSON.stringify(test.assert) === JSON.stringify(test.expected) ? '🤘 Test PASSED 🤘' : '👎 Test FAILED 👎', '\n');
    console.groupEnd(currentTest);
});


