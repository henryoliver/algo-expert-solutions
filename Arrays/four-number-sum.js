// Four Numbers Sum

/**
 * Solution 1 - Brute force (aka: Naive)
 *
 * Complexity Analysis
 * O(n^4) time | O(1) space
 *
 * The function should find all quadruplets in the array that sum up to the 
 * target sum and return a two-dimensional array of all these quadruplets.
 *
 * @param {array} array - array of distinct integers
 * @param {number} targetSum - target sum
 * @returns {array} two-dimensional array of all found quadruplets
 */
function fourNumberSum(array = [], targetSum = 0) {
    array.sort((a, b) => a - b);

    const foundQuadruplets = [];

    for (let i = 0; i < array.length - 3; i++) {
        const firstNumber = array[i];

        // Skip duplicate number
        if (firstNumber === array[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < array.length - 2; j++) {
            const secondNumber = array[j];

            // Skip duplicate number
            if (secondNumber === array[j - 1]) {
                continue;
            }

            for (let k = j + 1; k < array.length - 1; k++) {
                const thirdNumber = array[k];

                // Skip duplicate number
                if (thirdNumber === array[k - 1]) {
                    continue;
                }

                for (let l = k + 1; l < array.length; l++) {
                    const fourthNumber = array[l];

                    // Skip duplicate number
                    if (fourthNumber === array[l - 1]) {
                        continue;
                    }

                    if (firstNumber + secondNumber + thirdNumber + fourthNumber === targetSum) {
                        foundQuadruplets.push([firstNumber, secondNumber, thirdNumber, fourthNumber]);
                    }
                }
            }
        }
    }

    return foundQuadruplets;
}

/**
 * Solution 2 - Hash table
 *
 * Complexity Analysis
 * O(n^2) time | O(n^2) space - Avg.
 */
function fourNumberSum(array = [], targetSum = 0) {
    const numbers = Array.from(new Set(array));

    const trackedSums = {};
    const foundQuadruplets = [];

    for (let i = 1; i < numbers.length - 1; i++) {
        // After current number inner loop
        if (Object.keys(trackedSums).length) {
            let j = i + 1;

            while (j < numbers.length) {
                // P = x + y
                const currentSum = numbers[i] + numbers[j];
                const difference = targetSum - currentSum;
                const trackedSum = trackedSums[difference];

                if (difference in trackedSums) {
                    trackedSum.forEach((sumPair) => {
                        foundQuadruplets.push([...sumPair, numbers[i], numbers[j]].sort((a, b) => a - b));
                    });
                }

                j += 1;
            }
        }

        // Before current number inner loop
        let k = 0;

        while (k < i) {
            // Q = z + k
            const currentSum = numbers[i] + numbers[k];
            const trackedSum = trackedSums[currentSum];

            if (trackedSum) {
                trackedSum.push([numbers[i], numbers[k]]);
            } else {
                trackedSums[currentSum] = [[numbers[i], numbers[k]]];
            }

            k += 1;
        }
    }

    return foundQuadruplets;
}

/**
 * Solution 3 - Sorting along with the two-pointer sliding window approach
 *
 * Complexity Analysis
 * O(n^3) time | O(n) space
 */
function fourNumberSum(array = [], targetSum = 0) {
    array.sort((a, b) => a - b);

    const quadruplets = [];

    for (let i = 0; i < array.length - 3; i++) {
        for (let j = i + 1; j < array.length - 2; j++) {
            let leftPointer = j + 1;
            let rightPointer = array.length - 1;

            do {
                const currentSum = array[i] + array[j] + array[leftPointer] + array[rightPointer];

                if (currentSum === targetSum) {
                    quadruplets.push([array[i], array[j], array[leftPointer], array[rightPointer]].sort((a, b) => a - b));
                    leftPointer++;
                    rightPointer--;
                } else if (currentSum < targetSum) {
                    leftPointer++;
                } else if (currentSum > targetSum) {
                    rightPointer--;
                }
            } while (leftPointer < rightPointer);
        }
    }

    return quadruplets;
}

// Test cases (black box - unit testing)
const testCases = [
    { assert: fourNumberSum([1, 2, 3, 4, 5, 6, 7], 10), expected: [[1, 2, 3, 4]] },
    { assert: fourNumberSum([7, 6, 4, -1, 1, 2], 16), expected: [[ -1, 4, 6, 7 ], [ 1, 2, 6, 7 ]] },
    { assert: fourNumberSum([5, -5, -2, 2, 3, -3], 0), expected: [[ -5, -2, 2, 5 ], [ -5, -3, 3, 5 ], [ -3, -2, 2, 3 ]] },
    
    // Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { assert: fourNumberSum(), expected: [] },
    { assert: fourNumberSum([], 0), expected: [] },
    { assert: fourNumberSum([1], 10), expected: [] },
    { assert: fourNumberSum([1, 2, 3, 4]), expected: [] },
    { assert: fourNumberSum([], 1000000000), expected: [] },

    // Extremes
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

