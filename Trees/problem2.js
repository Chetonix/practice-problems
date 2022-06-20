/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */


//Recursive Solution//
// var isSameTree = function(p, q) {
//     if(!p && !q) {
//         return true;
//     }
//     if(!p || !q) {
//         return false;
//     }
//     return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

//Iterative solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    
    let arrP = [p];
    let arrQ = [q];
    
    while(arrP.length > 0 && arrQ.length > 0) {
        n1 = arrP.shift();
        n2 = arrQ.shift();
        
        if(n1.val !== n2.val) {
            return false;          
        }
        
        if(!n1.left && !n2.left) {
            arrP.push(n1.left);
            arrQ.push(n2.left);
        } else if (!n1.left || n2.left) {
            return false;
        }
        
        if(!n1.right && !n2.right) {
            arrP.push(n1.right);
            arrQ.push(n2.right);
        } else if (!n1.right || n2.right) {
            return false;
        }
    }
    
};




