/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let q = [root];
    let count = 0;
    while(q.length) {
        next = [];
        for (let n of q) {
            if(!n) continue;
            next.push(n.left);
            next.push(n.right);
        }
        if(next.length) {
            count++;
        }
        q = next;
    }
    return count;
};