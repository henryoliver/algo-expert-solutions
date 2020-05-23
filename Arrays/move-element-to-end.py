# Move Element To End

# def moveElementToEnd(array=[], toMove=0):
#     '''
#     Solution 1 - Queue tracking system
#
#     O(n) time | O(n) space
#
#     array: a list of integers
#     toMove: an integer
#     return: a list in place
#     '''
#     # Queue - FIFO
#     class Queue:
#         def __init__(self):
#             self.queue = []
#
#         def enqueue(self, item):
#             self.queue.append(item)
#
#         def dequeue(self):
#             return self.queue.pop(0)
#
#         def isEmpty(self):
#             return len(self.queue) == 0
#
#     toMoveIndexesQueue = Queue()
#
#     for currentIndex in range(len(array)):
#         currentNumber = array[currentIndex]
#
#         if (currentNumber == toMove):
#             toMoveIndexesQueue.enqueue(currentIndex)
#         elif (toMoveIndexesQueue.isEmpty() == False):
#             firstToMoveIndex = toMoveIndexesQueue.dequeue();
#
#             array[currentIndex] = array[firstToMoveIndex]
#             array[firstToMoveIndex] = currentNumber
#
#             toMoveIndexesQueue.enqueue(currentIndex)
#
#     return array

def moveElementToEnd(array=[], toMove=0):
    '''
    Solution 2 - Pointers narrowing approach

    O(n) time | O(1) space

    array: a list of integers
    toMove: an integer
    return: a list in place
    '''
    leftPointer = 0
    rightPointer = len(array) - 1

    while (leftPointer < rightPointer):
        leftNumber = array[leftPointer]
        rightNumber = array[rightPointer]

        if (leftNumber == toMove and rightNumber != toMove):
            array[leftPointer] = rightNumber
            array[rightPointer] = leftNumber

            leftPointer += 1
            rightPointer -= 1
        elif (rightNumber == toMove):
            rightPointer -= 1
        elif (leftNumber != toMove):
            leftPointer += 1

    return array



# Test cases (black box - unit testing)
testCases = [
    { 'assert': moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2), 'expected': [1, 3, 4, 2, 2, 2, 2, 2] },
    { 'assert': moveElementToEnd([1, 2, 4, 5, 6], 3), 'expected': [1, 2, 4, 5, 6] },
    { 'assert': moveElementToEnd([3, 3, 3, 3, 3], 3), 'expected': [3, 3, 3, 3, 3] },
    { 'assert': moveElementToEnd([1, 2, 4, 5, 3], 3), 'expected': [1, 2, 4, 5, 3] },
    
    # Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { 'assert': moveElementToEnd(), 'expected': [] },
    { 'assert': moveElementToEnd([]), 'expected': [] },

    # Extremes
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')

