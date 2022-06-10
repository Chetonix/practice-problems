// Binary Tree Postorder Traversal


var postorderTraversal = function(root) {
    const arr = [];
    function traverse (x) {
        if (!x) {
            return;
        }
        
        traverse(x.left);
        traverse(x.right);
        arr.push(x.val);
    }
   traverse(root);
    
    return arr;
    
};