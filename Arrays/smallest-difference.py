# Smallest Difference

# def smallestDifference(arrayOne=[], arrayTwo=[]):
#     '''
#     Solution 1 - Brute force (aka: Naive approach)
#
#     O(n^2) time | O(1) space
#
#     arrayOne: a list of integers
#     arrayTwo: a list of integers
#     return: a list of two integers
#     '''
#     closestPair = []
#     closestNumber = float('inf')
#
#     for firstNumber in arrayOne:
#         for secondNumber in arrayTwo:
#             absoluteDiff = abs(firstNumber - secondNumber)
#
#             if (absoluteDiff < closestNumber):
#                 closestNumber = absoluteDiff
#                 closestPair = [firstNumber, secondNumber]
#
#     return closestPair

def smallestDifference(arrayOne=[], arrayTwo=[]):
    '''
    Solution 2 - Sorting along with the two-pointer sliding window approach

    O(n log(n) + m log(m)) time | O(1) space

    arrayOne: a list of integers
    arrayTwo: a list of integers
    return: a list of two integers
    '''
    arrayOne.sort()
    arrayTwo.sort()

    closestPair = []
    closestNumber = float('inf')

    arrayOnePointer = 0;
    arrayTwoPointer = 0;

    while (arrayOnePointer < len(arrayOne) and arrayTwoPointer < len(arrayTwo)):
        firstNumber = arrayOne[arrayOnePointer]
        secondNumber = arrayTwo[arrayTwoPointer]
        currentAbsDiff = abs(firstNumber - secondNumber)

        if (firstNumber == secondNumber):
            closestPair = [firstNumber, secondNumber]
            break

        if (currentAbsDiff < closestNumber):
            closestNumber = currentAbsDiff
            closestPair = [firstNumber, secondNumber]

        if (firstNumber < secondNumber):
            arrayOnePointer += 1
        elif (secondNumber < firstNumber):
            arrayTwoPointer += 1

    return closestPair


# Test cases (black box - unit testing)
testCases = [
    { 'assert': smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]), 'expected': [28, 26] },
    { 'assert': smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]), 'expected': [20, 17] },
    { 'assert': smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031]), 'expected': [25, 1005] },
    
    # Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { 'assert': smallestDifference(), 'expected': [] },
    { 'assert': smallestDifference([]), 'expected': [] },
    { 'assert': smallestDifference([], []), 'expected': [] },
    { 'assert': smallestDifference([1], [1]), 'expected': [1, 1] },
    { 'assert': smallestDifference([1, 2, 3, 4]), 'expected': [] },
    { 'assert': smallestDifference([-1, -1, -1], [-1, -1, -1]), 'expected': [-1, -1] },

    # Extremes
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')

