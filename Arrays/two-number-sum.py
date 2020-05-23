def twoNumberSum(array=[], targetSum=0):
    '''
    Solution 1

    O(n^2) time | O(1) space

    If any two numbers in the input array sum up to the target sum,
    the funciton should return them in an array.

    array: a list of integers
    targetSum: an integer
    return: a list of two integers
    '''

    arrayLength = len(array)

    for i in range(arrayLength - 1):
        firstNumber = array[i]

        for j in range(i + 1, arrayLength):
            secondNumber = array[j]

            if (firstNumber + secondNumber == targetSum):
                return [firstNumber, secondNumber]

    return []


def twoNumberSum(array=[], targetSum=0):
    '''
    Solution 2

    O(n) time | O(n) space

    If any two numbers in the input array sum up to the target sum,
    the funciton should return them in an array.

    array: a list of integers
    targetSum: an integer
    return: a list of two integers
    '''
    trackedNumbers = {}

    for currentNumber in array:
        potentialPair = targetSum - currentNumber

        if (potentialPair in trackedNumbers):
            return [potentialPair, currentNumber]
        else:
            trackedNumbers[currentNumber] = True

    return []


def twoNumberSum(array=[], targetSum=0):
    '''
    Solution 3

    O(n log(n)) time | O(1) space

    If any two numbers in the input array sum up to the target sum,
    the funciton should return them in an array.

    array: a list of integers
    targetSum: an integer
    return: a list of two integers
    '''
    array.sort()

    leftIndex = 0
    rigthIndex = len(array) - 1

    while (leftIndex < rigthIndex):
        currentSum = array[leftIndex] + array[rigthIndex]

        if (currentSum == targetSum):
            return [array[leftIndex], array[rigthIndex]]
        elif (currentSum < targetSum):
            leftIndex += 1
        elif (currentSum > targetSum):
            rigthIndex -= 1

    return []


# Test cases (black box - unit testing)
'Test Case #2'
sorted(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)) == [-1, 11] and '🤘 Test PASSED' or '👎 Test FAILED'

# Boundary conditions (empty lists, singleton list, large numbers, small numbers)
'Boundary conditions'
'Test Case #2'
sorted(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)) == [] and '🤘 Test PASSED' or '👎 Test FAILED'

# Extremes
# console.info('Extremes');
