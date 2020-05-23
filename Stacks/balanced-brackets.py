def balancedBrackets(string=''):
    '''
    The function should return a boolean representing whether the string is
    balenced with regards to brackets

    Complexity Analysis
    O(n) time | O(n) space

    string: string made up of brackets and other optional characters
    return: boolean - string is balenced or not
    '''
    stack = []
    matchBrackets = {')': '(', ']': '[', '}': '{'}

    for char in string:
        if (char in matchBrackets.values()):
            stack.append(char)
        elif (char in matchBrackets):
            if (matchBrackets[char] == (stack or [None])[-1]):
                stack.pop()
            else:
                return False

    return len(stack) == 0
