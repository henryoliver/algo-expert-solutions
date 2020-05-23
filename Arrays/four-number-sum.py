def fourNumberSum(array=[], targetSum=0):
    '''
    Solution 1

    O(n^4) time | O(n) space

    The function should find all quadruplets in the array that sum up
    to the target sum and return a two-dimensional array of all these quadruplets.

    array: a list of integers
    targetSum: an integer
    return: a two-dimensional list of all found quadruplets
    '''
    # Remove duplicates and sort the list
    array = sorted(list(dict.fromkeys(array)))

    foundQuadruplets = [];

    for i in range(len(array) - 3):
        firstNumber = array[i]

        for j in range(i + 1, len(array) - 2):
            secondNumber = array[j]

            for k in range(j + 1, len(array) - 1):
                thirdNumber = array[k]

                for l in range(k + 1, len(array)):
                    fourthNumber = array[l]

                    if (firstNumber + secondNumber + thirdNumber + fourthNumber == targetSum):
                        foundQuadruplets.append([firstNumber, secondNumber, thirdNumber, fourthNumber])

    return foundQuadruplets

def fourNumberSum(array=[], targetSum=0):
    '''
    Solution 2 - Hash map

    O(n^3) time | O(n^2) space

    The function should find all quadruplets in the array that sum up
    to the target sum and return a two-dimensional array of all these quadruplets.

    array: a list of integers
    targetSum: an integer
    return: a two-dimensional list of all found quadruplets
    '''
    # Remove duplicates and sort the list
    array = sorted(list(dict.fromkeys(array)))

    trackedSums = {}
    foundQuadruplets = []

    for i in range(1, len(array)):

        # Inner loop after
        if (trackedSums):
            j = i + 1

            while (j < len(array)):
                currentSum = array[i] + array[j] # P = x + y
                difference = targetSum - currentSum

                if (difference in trackedSums):
                    trackedSum = trackedSums[difference]

                    for sumPair in trackedSum:
                        foundQuadruplets.append(sorted([*sumPair, array[i], array[j]]))

                j += 1

        # Inner loop before
        k = 0

        while (k < i):
            currentSum = array[i] + array[k] # Q = z + k
            difference = targetSum - currentSum

            if (currentSum in trackedSums):
                trackedSums[currentSum].append([array[i], array[k]])
            else:
                trackedSums[currentSum] = [[array[i], array[k]]]

            k += 1

    foundQuadruplets.sort()

    return foundQuadruplets

def fourNumberSum(array=[], targetSum=0):
    '''
    Solution 3 - Sorting along with the two-pointer sliding window approach

    O(n^3) time | O(n^2) space

    The function should find all quadruplets in the array that sum up
    to the target sum and return a two-dimensional array of all these quadruplets.

    array: a list of integers
    targetSum: an integer
    return: a two-dimensional list of all found quadruplets
    '''
    # Remove duplicates and sort the list
    array = sorted(list(dict.fromkeys(array)))

    foundQuadruplets = []

    for i in range(len(array) - 3):
        for j in range(i + 1, len(array) - 2):
            leftPointer = j + 1
            rightPointer = len(array) - 1

            while (leftPointer < rightPointer):
                currentSum = array[i] + array[j] + array[leftPointer] + array[rightPointer]

                if (currentSum == targetSum):
                    foundQuadruplets.append(sorted([array[i], array[j], array[leftPointer], array[rightPointer]]))
                    leftPointer += 1
                    rightPointer -= 1
                elif (currentSum < targetSum):
                    leftPointer += 1
                elif (currentSum > targetSum):
                    rightPointer -= 1

    foundQuadruplets.sort()

    return foundQuadruplets


# Test cases (black box - unit testing)
testCases = [
    { 'assert': fourNumberSum([1, 2, 3, 4, 5, 6, 7], 10), 'expected': [[1, 2, 3, 4]] },
    { 'assert': fourNumberSum([7, 6, 4, -1, 1, 2], 16), 'expected': [[ -1, 4, 6, 7 ], [ 1, 2, 6, 7 ]] },
    { 'assert': fourNumberSum([5, -5, -2, 2, 3, -3], 0), 'expected': [[ -5, -2, 2, 5 ], [ -5, -3, 3, 5 ], [ -3, -2, 2, 3 ]] },
    
    # Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { 'assert': fourNumberSum(), 'expected': [] },
    { 'assert': fourNumberSum([], 0), 'expected': [] },
    { 'assert': fourNumberSum([1], 10), 'expected': [] },
    { 'assert': fourNumberSum([1, 2, 3, 4]), 'expected': [] },
    { 'assert': fourNumberSum([], 1000000000), 'expected': [] },

    # Extremes
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')

