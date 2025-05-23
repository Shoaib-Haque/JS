/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Runtime 1 ms
Beats 86.01%

*/

var isValid = function(s) {
    let stack = [];
    for(let sign of s) {
        if(sign == ")") {
            if(stack[stack.length-1] != "(") {
                return false;
            }
            stack.pop();
        } else if (sign == "}") {
            if(stack[stack.length-1] != "{") {
                return false;
            }
            stack.pop();
        } else if (sign == "]") {
            if(stack[stack.length-1] != "[") {
                return false;
            }
            stack.pop();
        } else {
            stack.push(sign);
        }
    }
    if(stack.length > 0) {
        return false;
    }
    return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("["));


