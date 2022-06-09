// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack = [];
    
    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
            continue;
        }
        if (stack.length === 0) {
            return false;
        }
        let check;
        switch (char){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    
    return (stack.length === 0);
    
};