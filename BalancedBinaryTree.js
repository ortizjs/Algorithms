/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */

var treeHight = function (root) {
    if (!root) return -1;
    return 1 + Math.max(treeHight(root.left), treeHight(root.right))
};

var isBalanced = function (root) {
    if (!root) return true;
    let currHeight = Math.abs(treeHight(root.left) - treeHight(root.right)) <= 1
    return currHeight && isBalanced(root.left) && isBalanced(root.right)
};