// https://leetcode.com/problems/valid-parentheses/

const paranthesisMap = {
  "(": ")",
  "{": "}",
  "[": "]",
};
function validParenthesis(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (paranthesisMap[element]) {
      stack.push(element);
    } else if (element === paranthesisMap[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

let output = validParenthesis("((((()))))"); // true
output = validParenthesis("()[]{}"); // true
output = validParenthesis("(]"); // false
output = validParenthesis("()"); // true
output = validParenthesis("]"); // false
console.log(output); // true
