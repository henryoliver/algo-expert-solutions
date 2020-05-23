// Smallest Difference

/**
 * Solution 1 - Queue tracking system
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * @param {array} array of integers
 * @param {toMove}  integer
 * @returns {array} array in place
 */
function moveElementToEnd(array = [], toMove = 0) {
    // Queue
    const queue = ({ queue = [] } = {}) => ({
        enqueue: (item) => queue.push(item),
        dequeue: () => queue.shift(),
        isEmpty: () => queue.length === 0
    });

    const toMoveIndexesQueue = queue();

    for (let currentIndex in array) {
        const currentNumber = array[currentIndex];

        if (currentNumber === toMove) {
            toMoveIndexesQueue.enqueue(Number(currentIndex));
        } else if (toMoveIndexesQueue.isEmpty() === false) {
            const firstToMoveIndex = toMoveIndexesQueue.dequeue();

            array[currentIndex] = array[firstToMoveIndex];
            array[firstToMoveIndex] = currentNumber;

            toMoveIndexesQueue.enqueue(Number(currentIndex));
        }
    }
    
    return array;
}

/**
 * Solution 2 - Pointers narrowing approach
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * @param {array} array of integers
 * @param {toMove} integer
 * @returns {array} array in place
 */
function moveElementToEnd(array = [], toMove = 0) {
    let leftPointer = 0;
    let rightPointer = array.length - 1;

    do {
        const leftNumber = array[leftPointer];
        const rightNumber = array[rightPointer];

        if (leftNumber === toMove && rightNumber !== toMove) {
            array[leftPointer] = rightNumber;
            array[rightPointer] = leftNumber;

            leftPointer += 1;
            rightPointer -= 1;
        } else if (rightNumber === toMove) {
            rightPointer -= 1;
        } else if (leftNumber !== toMove) {
            leftPointer += 1;
        }
    } while (leftPointer < rightPointer);

    return array;
}


// Test cases (black box - unit testing)
const testCases = [
    { assert: moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2), expected: [1, 3, 4, 2, 2, 2, 2, 2] },
    { assert: moveElementToEnd([1, 2, 4, 5, 6], 3), expected: [1, 2, 4, 5, 6] },
    { assert: moveElementToEnd([3, 3, 3, 3, 3], 3), expected: [3, 3, 3, 3, 3] },
    { assert: moveElementToEnd([1, 2, 4, 5, 3], 3), expected: [1, 2, 4, 5, 3] },
    
    // Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { assert: moveElementToEnd(), expected: [] },

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


