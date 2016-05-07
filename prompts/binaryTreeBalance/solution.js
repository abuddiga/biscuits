/*
 *
 * Implement a function that checks if a binary tree is balanced.
 * In this case, a binary search tree is balanced if the heights of the two subtrees
 * of any node never differ by more than 1.
 *
 */

 var height = function(tree) {
  // currHeight = currHeight || 0;
  if (!tree) {
    return 0;
  }

  return Math.max(height(tree.left), height(tree.right)) + 1;
 }

var isBalanced = function(tree) {
  // tree is balanced if left and right subtrees are balanced
  // if (!tree || (!tree.left && !tree.right)) {
  //   return true;
  // }

  // if (!tree.left)
  if (!tree) {
    return true;
  }

  return isBalanced(tree.left) && isBalanced(tree.right) && (Math.abs(height(tree.left) - height(tree.right)) <= 1);
};

module.exports = isBalanced;
