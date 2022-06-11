// Binary Tree Postorder Traversal

// Recursive Solution //
// var postorderTraversal = function(root) {
//     const arr = [];
//     function traverse (x) {
//         if (!x) {
//             return;
//         }
        
//         traverse(x.left);
//         traverse(x.right);
//         arr.push(x.val);
//     }
//    traverse(root);
    
//     return arr;
    
// };

var postorderTraversal = function(root) {
    let firstStack = [root];
    let secondStack = [];
    let sol = [];
    
    while(firstStack.length > 0) {
        
        if (root === null) {
            return [];
        }
        

        let temp = firstStack.pop();
        
        secondStack.push(temp);
        if(temp.left !==null) {
            firstStack.push(temp.left);
        }
        if (temp.right !== null) {
             firstStack.push(temp.right);
        }
       
    }
    
    while(secondStack.length > 0) {
        sol.push(secondStack.pop().val);
    }
    
    return sol;
}