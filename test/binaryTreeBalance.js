// This repo comes with mocha and chai.
var expect = require('chai').expect;
// Replace nameOfFunction and nameOfPrompt below
var isBalanced = require('../prompts/binaryTreeBalance/solution.js');
var BST = require('../ds').BinaryTree;

// Let the testing begin
describe('binaryTreeBalance', function() {
  // beforeEach (or before) hook if needed
  beforeEach(function (done) {
    // Do something before test
    done();
  });

  it('should be balanced', function(done) {
    var bst = [12,8,16,10,6,14,18,9].reduce(function (tree, value) {
      tree.insert(value);
      return tree;
    }, new BST());
    expect(isBalanced(bst.root)).to.equal(true);

    var otherBst = [12,8,16,10,6,14,18].reduce(function (tree, value) {
      tree.insert(value);
      return tree;
    }, new BST());
    expect(isBalanced(otherBst.root)).to.equal(true);
    done();
  });

  it('should not be balanced', function(done) {
    var bst = [12,8,16,10,6,14,18,9,8.5].reduce(function (tree, value) {
      tree.insert(value);
      return tree;
    }, new BST());
    expect(isBalanced(bst.root)).to.equal(false);

    var otherBst = [5,7,9].reduce(function (tree, value) {
      tree.insert(value);
      return tree;
    }, new BST());
    expect(isBalanced(otherBst.root)).to.equal(false);
    done();
  });
});
