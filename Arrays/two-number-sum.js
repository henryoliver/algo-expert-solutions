// Subset Sum / Two Numbers Sum

/**
 * Questions:
 * -- What size of the list?
 *  No more than medium size (maybe thousads of elements)
 *
 * -- What is the range of items? Negative numbers?
 *  Our items are integers positive and negative
 *
 * -- Return one solution or all solutions?
 *  We will return any single solution
 *
 * -- Can we use elements more than once?
 *  Can only use an element once 
 *
 * -- Can we mutate the param?
 *  Yes
*/

/**
 * Solution 1 - Brute force (aka: Naive)
 *
 * Complexity Analysis
 * O(n^2) time | O(1) space
 *
 * If any two numbers in the input array sum up to the target sum,
 * the funciton should return them in an array.
 *
 * @param {array} array - array of distinct integers
 * @param {number} targetSum - target sum
 * @returns {array} array of two numbers
 */
function twoNumberSum(array = [], targetSum = 0) {
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length - 1; i++) {
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

            if (firstNumber + secondNumber === targetSum) {
                return [firstNumber, secondNumber];
            }
        }
    }

    return [];
}

/**
 * Solution 2 - Hash table
 *
 * O(n) time | O(n) space
 *
 * If any two numbers in the input array sum up to the target sum,
 * the funciton should return them in an array.
 *
 * @param {array} array - array of distinct integers
 * @param {number} targetSum - target sum
 * @returns {array} array of two numbers
 */
function twoNumberSum(array = [], targetSum = 0) {
    const trackedNumbers = {};

    for (const currentNumber of array) {
        const potentialPair = Number(targetSum - currentNumber);
        const trackedNumber = trackedNumbers[potentialPair];

        if (trackedNumber === true) {
            return [potentialPair, currentNumber].sort((a, b) => a - b);
        } else {
            trackedNumbers[currentNumber] = true;
        }
    }

    return [];
}

/**
 * Solution 3
 *
 * O(n log(n)) time | O(1) space
 *
 * If any two numbers in the input array sum up to the target sum,
 * the funciton should return them in an array.
 *
 * @param {array} array - array of distinct integers
 * @param {number} targetSum - target sum
 * @returns {array} array of two numbers
 */
function twoNumberSum(array = [], targetSum = 0) {
    array.sort((a, b) => a - b);

    let leftIndex = 0;
    let rightIndex = array.length - 1;

    do {
        const currentSum = array[leftIndex] + array[rightIndex];

        if (currentSum === targetSum) {
            return [array[leftIndex], array[rightIndex]];
        } else if (currentSum < targetSum) {
            leftIndex++;
        } else if (currentSum > targetSum) {
            rightIndex--;
        }
    } while (leftIndex < rightIndex);

    return [];
}


// Test cases (black box - unit testing)
const testCases = [
    { assert: twoNumberSum([4, 6, 1, -3], 3), expected: [-3, 6] },
    { assert: twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17), expected: [8, 9] },
    { assert: twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10), expected: [-1, 11] },
    
    // Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { assert: twoNumberSum(), expected: [] },
    { assert: twoNumberSum([], 0), expected: [] },
    { assert: twoNumberSum([1], 10), expected: [] },
    { assert: twoNumberSum([1, 2, 3, 4]), expected: [] },
    { assert: twoNumberSum([], 1000000000), expected: [] },

    // Extremes
    { assert: twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164), expected: [] },
    { assert: twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163), expected: [-47, 210] }
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



