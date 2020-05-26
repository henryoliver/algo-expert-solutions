# def isPalindrome(string=''):
#     '''
#     Solution 1 - Reverse array last first
#
#     Complexity Analysis
#     O(n) time | O(n) space
#
#     Check if non-empty string is a palindrome
#
#     string: non-empty string
#     return: boolean
#     '''
#     # Gracefully handle type and Falsy values
#     if (not isinstance(string, str) or string == ''):
#         print('Argument should be a valid non-empty string')
#         return False
#
#     if (len(string) == 1):
#         return True
#
#     reversedChars = []
#
#     for i in reversed(range(len(string))):
#         reversedChars.append(string[i])
#
#     return string.lower() == ''.join(reversedChars).lower()

# def isPalindrome(string='', i=0):
#     '''
#     Solution 2 - Recursion
#
#     Complexity Analysis
#     O(n) time | O(n) space
#
#     Check if non-empty string is a palindrome
#
#     string: non-empty string
#     return: boolean
#     '''
#     # Gracefully handle type and Falsy values
#     if (not isinstance(string, str) or string == ''):
#         print('Argument should be a valid non-empty string')
#         return False
#
#     j = len(string) - 1
#
#     firstChar = string[i]
#     lastChar = string[j - i]
#
#     # Base case
#     if (i >= j):
#         return True
#
#     if (firstChar.lower() == lastChar.lower()):
#         return isPalindrome(string, i + 1)
#     else:
#         return False
#

def isPalindrome(string=''):
    '''
    Solution 3 - Pointers

    Complexity Analysis
    O(n) time | O(1) space

    Check if non-empty string is a palindrome

    string: non-empty string
    return: boolean
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(string, str) or string == ''):
        print('Argument should be a valid non-empty string')
        return False

    if (len(string) == 1):
        return True

    for i in range(len(string)):
        leftPointer = string[i]
        rightPointer = string[len(string) - 1 - i]

        if (leftPointer.lower() != rightPointer.lower()):
            return False

    return True


# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical ('expected') and should be accepted by the system.
    { 'assert': isPalindrome('Wow'), 'expected': True },
    { 'assert': isPalindrome('Anna'), 'expected': True },
    { 'assert': isPalindrome('Kayak'), 'expected': True },
    { 'assert': isPalindrome('1abcba1'), 'expected': True },
    { 'assert': isPalindrome('AbCdcBa'), 'expected': True },
    { 'assert': isPalindrome('Repaper'), 'expected': True },
    { 'assert': isPalindrome('abcdefg'), 'expected': False },
    { 'assert': isPalindrome('Hello World'), 'expected': False },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    { 'assert': isPalindrome('a'), 'expected': True },
    { 'assert': isPalindrome('tattarrattat'), 'expected': True },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': isPalindrome(), 'expected': False },
    { 'assert': isPalindrome(0), 'expected': False },
    { 'assert': isPalindrome(''), 'expected': False },
    { 'assert': isPalindrome([]), 'expected': False },
    { 'assert': isPalindrome(()), 'expected': False },
    { 'assert': isPalindrome({}), 'expected': False },
    { 'assert': isPalindrome(None), 'expected': False },
    { 'assert': isPalindrome(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


