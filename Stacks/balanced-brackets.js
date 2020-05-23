/**
 * The function should return a boolean representing whether the string is 
 * balenced with regards to brackets
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * @param string - string made up of brackets and other optional characters
 * @returns boolean - string is balenced or not
 */
// const balancedBrackets = (string) => {
//     const stack = [];
//     const matchBrackets = {')': '(', ']': '[', '}': '{'};
//
//     for (const char of string) {
//         if (Object.values(matchBrackets).includes(char)) {
//             stack.push(char);
//         } else if (Object.keys(matchBrackets).includes(char)) {
//             if (matchBrackets[char] === stack[stack.length - 1]) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//
//     return stack.length === 0;
// };

const balancedBrackets = (string = '') => {
    const openBrackets = '([{';
    const closeBrackets = ')]}'; 

    const result = Array.from(string).reduce((acc, curr) => {
        if (openBrackets.includes(curr)) {
            return ++acc;
        } else if (closeBrackets.includes(curr)) {
            return --acc;
        }

        return acc;
    }, 0);

    return result === 0;
};

console.debug(balancedBrackets('{[[[[({(}))]]]]}'));
