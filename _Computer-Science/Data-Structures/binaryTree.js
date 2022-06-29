/*
Binary Tree
    A binary tree is an efficient data structure for fast data storage and 
    retrieval due to its O(log N) runtime. It is a specialized tree data structure 
    that is made up of a root node, and at most two child branches or subtrees. 
    Each child node is itself a binary tree.

    Each node has the following properties:

    data
    a depth value, where depth of 1 indicates the top level of the tree and a 
    depth greater than 1 is a level somewhere lower in the tree
    a left pointer that points to a left child which is itself a binary tree, 
    and must have a data lesser than the root node’s data
    a right pointer that points to a right child which is itself a binary tree, 
    and must have a data greater than the root node’s data
*/

class BinaryTree {
	constructor(value, depth = 1) {
		this.value = value;
		this.depth = depth;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left) {
				this.left.insert(value);
			} else {
				this.left = new BinaryTree(value, this.depth + 1);
			}
		} else {
			if (this.right) {
				this.right.insert(value);
			} else {
				this.right = new BinaryTree(value, this.depth + 1);
			}
		}
	}

	getNodeByValue(value) {
		if (value === this.value) {
			return this;
		} else if (this.left && value < this.value) {
			return this.left.getNodeByValue(value);
		} else if (this.right) {
			return this.right.getNodeByValue(value);
		} else {
			return null;
		}
	}

	depthFirstTraversal() {
		if (this.left) {
			this.left.depthFirstTraversal();
		}
		if (this.right) {
			this.right.depthFirstTraversal();
		}
		console.log(this.value, this.depth);
	}
}

// Example
const simpleTree = new BinaryTree(32);

simpleTree.insert(23);
simpleTree.insert(64);
simpleTree.insert(21);
simpleTree.insert(12);
simpleTree.insert(45);
simpleTree.insert(19);

console.log(simpleTree.depthFirstTraversal());

module.exports = BinaryTree;
