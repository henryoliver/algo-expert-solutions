// Three Numbers Sum

/**
 * Solution 1 - Brute force (aka: Naive)
 *
 * Complexity Analysis
 * O(n^3) time | O(n) space
 *
 * The function should find all triplets in the array that sum up to the 
 * target sum and return a two-dimensional array of all these triplets.
 *
 * @param {array} array - array of distinct integers
 * @param {number} targetSum - target sum
 * @returns {array} two-dimensional array of all found triplets
 */
function threeNumberSum(array = [], targetSum = 0) {
    array.sort((a, b) => a - b);

    const foundTriplets = [];

    for (let i = 0; i < array.length - 2; i++) {
        const firstNumber = array[i];

        // Skip duplicate number
        if (firstNumber === array[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < array.length - 1; j++) {
            const secondNumber = array[j];

            // Skip duplicate number
            if (secondNumber === array[j - 1]) {
                continue;
            }

            for (let k = j + 1; k < array.length; k++) {
                const thirdNumber = array[k];

                // Skip duplicate number
                if (thirdNumber === array[k - 1]) {
                    continue;
                }

                if (firstNumber + secondNumber + thirdNumber === targetSum) {
                    foundTriplets.push([firstNumber, secondNumber, thirdNumber]);
                }
            }
        }
    }

    return foundTriplets;
}


/**
 * Solution 2 - Hash table
 *
 * Complexity Analysis
 * O(n^2) time | O(n^2) space
 */
function threeNumberSum(array = [], targetSum = 0) {
    array.sort((a, b) => a - b);

    const foundTriplets = [];

    for (let i = 0; i < array.length - 2; i++) {
        const trackedNumbers = {};
        const firstNumber = array[i];

        // Skip duplicate number
        if (firstNumber === array[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < array.length; j++) {
            const secondNumber = array[j];

            // Skip duplicate number
            if (secondNumber === array[j - 1]) {
                continue;
            }

            const potentialDiff = targetSum - (firstNumber + secondNumber);
            const trackedNumber = trackedNumbers[potentialDiff];

            if (trackedNumber === true) {
                foundTriplets.push([potentialDiff, firstNumber, secondNumber].sort((a, b) => a - b));
            } else {
                trackedNumbers[secondNumber] = true;
            }
        }
    }

    // Deep sort final found triplets
    foundTriplets.sort((a, b) => {
        if (a[0] === b[0] && a[1] === b[1]) {
            return a[2] - b[2];
        } else if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    return foundTriplets;
}


/**
 * Solution 3 - Sorting along with the two-pointer sliding window approach
 *
 * Complexity Analysis
 * O(n^2) time | O(n) space
 */
function threeNumberSum(array = [], targetSum = 0) {
    array.sort((a, b) => a - b);

    const triplets = [];

    for (let i = 0; i < array.length - 2; i++) {
        const currentNumber = array[i];

        let leftIndex = i + 1;
        let rightIndex = array.length - 1;

        do {
            const currentSum = currentNumber + array[leftIndex] + array[rightIndex];

            if (currentSum === targetSum) {
                triplets.push([currentNumber, array[leftIndex], array[rightIndex]]);
                leftIndex++;
                rightIndex--;
            } else if (currentSum < targetSum) {
                leftIndex++;
            } else if (currentSum > targetSum) {
                rightIndex--;
            }
        } while (leftIndex < rightIndex);
    }

    return triplets;
}

// Test cases (black box - unit testing)
const testCases = [
    { assert: threeNumberSum([1, 2, 3], 6), expected: [[1, 2, 3]] },
    { assert: threeNumberSum([1, 2, 3], 7), expected: [] },
    { assert: threeNumberSum([8, 10, -2, 49, 14], 57), expected: [[-2, 10, 49]] },
    { assert: threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0), expected: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]] },
    { assert: threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0), expected: [[-8, 3, 5], [-6, 1, 5], [-1, 0, 1]] },
    { assert: threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18), expected: [[1, 2, 15], [1, 8, 9], [2, 7, 9], [3, 6, 9], [3, 7, 8], [4, 5, 9], [4, 6, 8], [5, 6, 7]] },
    
    // Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { assert: threeNumberSum(), expected: [] },
    { assert: threeNumberSum([], 0), expected: [] },
    { assert: threeNumberSum([1], 10), expected: [] },
    { assert: threeNumberSum([1, 2, 3, 4]), expected: [] },
    { assert: threeNumberSum([], 1000000000), expected: [] },

    // Extremes
    { assert: threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0), expected: [[-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-5, -1, 6], [-5, 0, 5], [-5, 2, 3], [-1, 0, 1]] },
    { assert: threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18), expected: [[1, 2, 15], [1, 8, 9], [2, 7, 9], [3, 6, 9], [3, 7, 8], [4, 5, 9], [4, 6, 8], [5, 6, 7]]}
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

