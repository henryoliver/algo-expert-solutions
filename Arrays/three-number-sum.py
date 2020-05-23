# def threeNumberSum(array=[], targetSum=0):
#     '''
#     Solution 1 - Naive approach
#
#     O(n^3) time | O(1) space
#
#     The function should find all triplets in the array that sum up
#     to the target sum and return a two-dimensional array of all these triplets.
#
#     array: a list of integers
#     targetSum: an integer
#     return: a two-dimensional list of all found triplets
#     '''
#     # Remove duplicates and sort the list
#     array = sorted(list(dict.fromkeys(array)))
#
#     foundTriplets = [];
#
#     for i in range(len(array) - 2):
#         firstNumber = array[i]
#
#         for j in range(i + 1, len(array) - 1):
#             secondNumber = array[j]
#
#             for k in range(j + 1, len(array)):
#                 thirdNumber = array[k]
#
#                 if (firstNumber + secondNumber + thirdNumber == targetSum):
#                     foundTriplets.append([firstNumber, secondNumber, thirdNumber])
#
#     return foundTriplets
#

# def threeNumberSum(array=[], targetSum=0):
#     '''
#     Solution 2 - Hash map
#
#     O(n^2) time | O(n) space
#
#     If any two numbers in the input array sum up to the target sum,
#     the funciton should return them in an array.
#
#     array: a list of integers
#     targetSum: an integer
#     return: a list of two integers
#     '''
#     # Remove duplicates and sort the list
#     array = sorted(list(dict.fromkeys(array)))
#
#     foundTriplets = []
#
#     for i in range(len(array) - 1):
#         trackedNumbers = {}
#         firstNumber = array[i]
#
#         for j in range(i + 1, len(array)):
#             secondNumber = array[j]
#             potentialDiff = targetSum - (firstNumber + secondNumber)
#
#             if (potentialDiff in trackedNumbers):
#                 foundTriplets.append(sorted([potentialDiff, firstNumber, secondNumber]))
#             else:
#                 trackedNumbers[secondNumber] = True
#
#     foundTriplets.sort()
#
#     return foundTriplets
#

def threeNumberSum(array=[], targetSum=0):
    '''
    Solution 3

    O(n^2) time | O(n) space

    The function should find all triplets in the array that sum up
    to the target sum and return a two-dimensional array of all these triplets.

    array: a list of integers
    targetSum: an integer
    return: a two-dimensional list of all found triplets
    '''
    # Remove duplicates and sort the list
    array = sorted(list(dict.fromkeys(array)))

    foundTriplets = []

    for i in range(len(array) - 2):
        leftPointer = i + 1
        rightPointer = len(array) - 1

        while (leftPointer < rightPointer):
            currentSum = array[i] + array[leftPointer] + array[rightPointer]

            if (currentSum == targetSum):
                foundTriplets.append(sorted([array[i], array[leftPointer], array[rightPointer]]))
                leftPointer += 1
                rightPointer -= 1
            elif (currentSum < targetSum):
                leftPointer += 1
            elif (currentSum > targetSum):
                rightPointer -= 1

    foundTriplets.sort()

    return foundTriplets


# Test cases (black box - unit testing)
testCases = [
    { 'assert': threeNumberSum([1, 2, 3], 7), 'expected': [] },
    { 'assert': threeNumberSum([1, 2, 3], 6), 'expected': [[1, 2, 3]] },
    { 'assert': threeNumberSum([8, 10, -2, 49, 14], 57), 'expected': [[-2, 10, 49]] },
    { 'assert': threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0), 'expected': [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]] },
    { 'assert': threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0), 'expected': [[-8, 3, 5], [-6, 1, 5], [-1, 0, 1]] },
    { 'assert': threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18), 'expected': [[1, 2, 15], [1, 8, 9], [2, 7, 9], [3, 6, 9], [3, 7, 8], [4, 5, 9], [4, 6, 8], [5, 6, 7]] },

    # Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { 'assert': threeNumberSum(), 'expected': [] },
    { 'assert': threeNumberSum([], 0), 'expected': [] },
    { 'assert': threeNumberSum([1], 10), 'expected': [] },
    { 'assert': threeNumberSum([1, 2, 3, 4]), 'expected': [] },
    { 'assert': threeNumberSum([], 1000000000), 'expected': [] },
    { 'assert': threeNumberSum([1, 1, 1, 1, 2, 2, 2], 0), 'expected': [] },

    # Extremes
    { 'assert': threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0), 'expected': [[-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-5, -1, 6], [-5, 0, 5], [-5, 2, 3], [-1, 0, 1]] },
    { 'assert': threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18), 'expected': [[1, 2, 15], [1, 8, 9], [2, 7, 9], [3, 6, 9], [3, 7, 8], [4, 5, 9], [4, 6, 8], [5, 6, 7]]}
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')

