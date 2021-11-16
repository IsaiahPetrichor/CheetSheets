// Binary Search
{
	/*
    Binary search takes a sorted array and recursively splits the array in half,
    using the value you are searching for compared to the middle element of the
    array. it continues this until the value is found and it takes O(log N).

    If the target value is not found, the function returns null. You used the 
    following steps to create this function:

    Initialize the left and right indices as 0 and the length of the array.
    Create a while loop that continues to execute until the left index equals the 
    right index.
    Get the value at the index that falls in the middle of left and right.
    Return the index if the value is equal to target.
    Set left equal to the current index plus one if the target is greater than the 
    value.
    Set right equal to the current index if the target is less than the value.
    While the benefits of binary search are significant compared to linear search, 
    it’s important to remember that the function will only work on sorted lists.
    */
}

// Example
const binarySearch = (arr, target) => {
	let left = 0;
	let right = arr.length;

	while (right > left) {
		const indexToCheck = Math.floor((left + right) / 2);
		const checking = arr[indexToCheck];
		console.log(`indexToCheck equals: ${indexToCheck}`);

		if (checking === target) {
			return indexToCheck;
		} else if (target > checking) {
			left = indexToCheck + 1;
		} else {
			right = indexToCheck;
		}
	}
	return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 71;

const targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);

module.exports = { binarySearch };

//////////////////////////////////////////////////////////////////////////////////

// Binary Search Tree
{
	/*
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
}

//Example
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

module.exports = { BinaryTree };

//////////////////////////////////////////////////////////////////////////////////

// Depth-First Traversal
{
	/*
	Graph search algorithm,
	*/
}

//Example

const testGraph = require('./helperClasses.js'); // importing a test graph

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
	callback(start);

	start.edges.forEach((edge) => {
		const neighbor = edge.end;

		if (!visitedVertices.includes(neighbor)) {
			visitedVertices.push(neighbor);
			depthFirstTraversal(neighbor, callback, visitedVertices);
		}
	});
};

depthFirstTraversal(testGraph.vertices[0], (vertex) => {
	console.log(vertex.data);
});

depthFirstTraversal(testGraph.vertices[0]);

//////////////////////////////////////////////////////////////////////////////////

// Breadth-First Traversal
