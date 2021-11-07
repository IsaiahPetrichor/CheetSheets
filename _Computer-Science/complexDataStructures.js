// HASH MAPS
{
	/*
    A hash map is:

    Built on top of an array using a special indexing system.
    A key-value storage with fast assignments and lookup.
    A table that represents a map from a set of keys to a set of values.
    Hash maps accomplish all this by using a hash function, which turns 
    a key into an index into the underlying array.

    A hash collision is when a hash function returns the same index for 
    two different keys.

    There are different hash collision strategies. Two important ones are 
    separate chaining, where each array index points to a different data 
    structure, and open addressing, where a collision triggers a probing 
    sequence to find where to store the value for a given key.


    Hash map: A key-value store that uses an array and a hashing function to save and retrieve values.
    Key: The identifier given to a value for later retrieval.
    Hash function: A function that takes some input and returns a number.
    Compression function: A function that transforms its inputs into some smaller range of possible outputs.

    Recipe for saving to a hash table:
    - Take the key and plug it into the hash function, getting the hash code.
    - Modulo that hash code by the length of the underlying array, getting an array index.
    - Check if the array at that index is empty, if so, save the value (and the key) there.
    - If the array is full at that index continue to the next possible position depending on your collision strategy.

    Recipe for retrieving from a hash table:
    - Take the key and plug it into the hash function, getting the hash code.
    - Modulo that hash code by the length of the underlying array, getting an array index.
    - Check if the array at that index has contents, if so, check the key saved there.
    - If the key matches the one you're looking for, return the value.
    - If the keys don't match, continue to the next position depending on your collision strategy.
    */
}

class HashMap {
	constructor(size = 0) {
		this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
	}

	hash(key) {
		let hashCode = 0;
		for (let i = 0; i < key.length; i++) {
			hashCode += hashCode + key.charCodeAt(i);
		}
		return hashCode % this.hashmap.length;
	}

	assign(key, value) {
		const arrayIndex = this.hash(key);
		const linkedList = this.hashmap[arrayIndex];
		if (linkedList.head === null) {
			linkedList.addToHead({ key, value });
			return;
		}
		let current = linkedList.head;
		while (current) {
			if (current.data.key === key) {
				current.data = { key, value };
			}
			if (!current.next) {
				current.next = new Node({ key, value });
				break;
			}
			current = current.next;
		}
	}

	retrieve(key) {
		const arrayIndex = this.hash(key);
		let current = this.hashmap[arrayIndex].head;
		while (current) {
			if (current.data.key === key) {
				console.log(
					`\nRetrieving ${current.data.value} from index ${arrayIndex}`
				);
				return current.data.value;
			}
			current = current.next;
		}
		return null;
	}
}

module.exports = HashMap;

// Example
const HashMap = require('./HashMap');

const birdCensus = new HashMap(16);
birdCensus.assign('mandarin duck', 'Central Park Pond');
birdCensus.assign('monk parakeet', 'Brooklyn College');
birdCensus.assign('horned owl', 'Pelham Bay Park');

birdCensus.retrieve('mandarin duck');
birdCensus.retrieve('monk parakeet');
birdCensus.retrieve('horned owl');

//////////////////////////////////////////////////////

// TREES
{
	/*
    Trees are wonderful data structures that can model real life hierarchical information, including organizational charts, 
    genealogical trees, computer file systems, HTML elements on a web page (also known as the Document Object Model, or DOM), 
    state diagrams, and more.
    
    A tree is composed of tree nodes. A tree node is a very simple data structure that contains:
    
    Data
    A list of children, where each child is itself a tree node
    We can add data to and remove data from a tree and traverse it in two different ways:
    
    Depth-first, or
    Breadth-first
    */
}

class TreeNode {
	constructor(data) {
		(this.data = data), (this.children = []);
	}

	addChild(child) {
		if (child instanceof TreeNode) {
			this.children.push(child);
		} else {
			this.children.push(new TreeNode(child));
		}
	}

	removeChild(childToRemove) {
		const length = this.children.length;

		this.children = this.children.filter((child) => {
			if (childToRemove instanceof TreeNode) {
				if (childToRemove !== child) {
					return true;
				}
				return false;
			} else {
				if (childToRemove !== child.data) {
					return true;
				}
				return false;
			}
		});

		if (length === this.children.length) {
			this.children.forEach((child) => {
				child.removeChild(childToRemove);
			});
		}
	}

	print(level = 0) {
		let result = '';
		for (let i = 0; i < level; i++) {
			result += '-- ';
		}
		console.log(`${result}${this.data}`);
		this.children.forEach((child) => child.print(level + 1));
	}

	depthFirstTraversal() {
		console.log(this.data);
		this.children.forEach((child) => {
			child.depthFirstTraversal();
		});
	}

	breadthFirstTraversal() {
		let queue = [this];

		while (queue.length > 0) {
			const current = queue.shift();
			console.log(current.data);
			queue = queue.concat(current.children);
		}
	}
}

module.exports = TreeNode;

// Example
const menu = new TreeNode('Menu');

const entries = {
	Breakfast: ['Cereal', 'BBQ Chicken', 'Oatmeal'],
	Lunch: ['Soup', 'Sandwich', 'Lasagna'],
	Dinner: ['Yogurt', 'Filet Mignon', 'Fish Florentine'],
};

const meals = Object.keys(entries);
for (let meal = 0; meal < meals.length; meal++) {
	menu.addChild(meals[meal]);
	const entrylist = entries[meals[meal]];
	entrylist.forEach((entry) => {
		menu.children[meal].addChild(entry);
	});
}

menu.print();

menu.removeChild('BBQ Chicken');
menu.removeChild('Yogurt');

menu.children[0].addChild('Yogurt');
menu.children[2].addChild('BBQ Chicken');

const correct = new TreeNode('Corrected Menu');
correct.children = menu.children;

correct.print();
menu.depthFirstTraversal();

//////////////////////////////////////////////////////

// HEAPS
{
	/*
	A heap data structure is a specialized tree data structure that satisfies the heap condition:

	In a max-heap, for any given element, its parent’s value is greater than or equal to its value.
	In a min-heap, for any given element, its parent’s value is less than or equal to its value.
	A heap data structure is commonly implemented as a binary tree. In this lesson, we’re going to 
	implement a min-heap in JavaScript. Min-heaps efficiently keep track of the minimum value in a dataset, 
	even as we add and remove elements.

	Heaps enable solutions for complex problems such as finding the shortest path (Dijkstra’s Algorithm) or 
	efficiently sorting a dataset (heapsort).

	They’re an essential tool for confidently navigating some of the difficult questions posed in a technical interview.
	*/
	/*
	To recap: MinHeap tracks the minimum element as the element at index 1 within an internal Javascript array.

	When adding elements, we use .bubbleUp() to compare the new element with its parent, making swaps if it violates 
	the heap condition: children must be greater than their parents.

	When removing the minimum element, we swap it with the last element in the heap. Then we use .heapify() to compare 
	the new root with its children, swapping with the smaller child if necessary.

	Heaps are useful because they’re efficient in maintaining their heap condition. Building a heap using elements that 
	decrease in value would ensure that we continually violate the heap condition. How many swaps would that cause?
	*/
}

class MinHeap {
	constructor() {
		this.heap = [null];
		this.size = 0;
	}

	popMin() {
		if (this.size === 0) {
			return null;
		}
		console.log(
			`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`
		);
		this.swap(1, this.size);
		const min = this.heap.pop();
		this.size--;
		console.log(`.. Removed ${min} from heap`);
		console.log('..', this.heap);
		this.heapify();
		return min;
	}

	add(value) {
		console.log(`.. adding ${value}`);
		this.heap.push(value);
		this.size++;
		this.bubbleUp();
		console.log(`added ${value} to heap`, this.heap);
	}

	bubbleUp() {
		let current = this.size;
		while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
			console.log(
				`.. swap ${this.heap[current]} with parent ${
					this.heap[getParent(current)]
				}`
			);
			this.swap(current, getParent(current));
			console.log('..', this.heap);
			current = getParent(current);
		}
	}

	heapify() {
		console.log('Heapify');
		let current = 1;
		let leftChild = getLeft(current);
		let rightChild = getRight(current);

		while (this.canSwap(current, leftChild, rightChild)) {
			if (this.exists(leftChild) && this.exists(rightChild)) {
				if (leftChild < rightChild) {
					this.swap(current, leftChild);
					current = leftChild;
				} else {
					this.swap(current, rightChild);
					current = rightChild;
				}
			} else {
				this.swap(current, leftChild);
				current = leftChild;
			}
			leftChild = getLeft(current);
			rightChild = getRight(current);
		}
	}

	exists(index) {
		return index <= this.size;
	}

	canSwap(current, leftChild, rightChild) {
		// Check that one of the possible swap conditions exists
		return (
			(this.exists(leftChild) && this.heap[current] > this.heap[leftChild]) ||
			(this.exists(rightChild) && this.heap[current] > this.heap[rightChild])
		);
	}

	swap(a, b) {
		[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
	}
}

const getParent = (current) => Math.floor(current / 2);
const getLeft = (current) => current * 2;
const getRight = (current) => current * 2 + 1;

module.exports = MinHeap;

// Example
// instantiate a MinHeap class
const minHeap = new MinHeap();

// helper function to return a random integer
function randomize() {
	return Math.floor(Math.random() * 40);
}

// populate minHeap with random numbers
for (let i = 0; i < 6; i++) {
	minHeap.add(randomize());
}

// display the bubbled up numbers in the heap
console.log('Bubbled Up', minHeap.heap);

// remove the minimum value from heap
for (let i = 0; i < 6; i++) {
	minHeap.popMin();
	console.log('Heapified', minHeap.heap);
}

//////////////////////////////////////////////////////

// GRAPHS
{
	/*
	We typically represent the vertex-edge relationship of a graph in two ways: an adjacency list or an adjacency matrix.

	An adjacency matrix is a table. Across the top, every vertex in the graph appears as a column. Down the side, every 
	vertex appears again as a row. Edges can be bi-directional, so each vertex is listed twice.

	To find an edge between B and P, we would look for the B row and then trace across to the P column. The contents of 
	this cell represent a possible edge.

	Our diagram uses 1 to mark an edge, 0 for the absence of an edge. In a weighted graph, the cell contains the cost of that edge.

	In an adjacency list, each vertex contains a list of the vertices where an edge exists. To find an edge, one looks 
	through the list for the desired vertex.

	KEY TERMS:
	vertex: A node in a graph.
	edge: A connection between two vertices.
	adjacent: When an edge exists between vertices.
	path: A sequence of one or more edges between vertices.
	disconnected: Graph where at least two vertices have no path connecting them.
	weighted: Graph where edges have an associated cost.
	directed: Graph where travel between vertices can be restricted to a single direction.
	cycle: A path which begins and ends at the same vertex.
	adjacency matrix: Graph representation where vertices are both the rows and the columns. Each cell represents a possible edge.
	adjacency list: Graph representation where each vertex has a list of all the vertices it shares an edge with.
	*/
}

// Graphs Require 3 Classes Total
class Edge {
	constructor(start, end, weight = null) {
		this.start = start;
		this.end = end;
		this.weight = weight;
	}
}

module.exports = Edge;

class Vertex {
	constructor(data) {
		this.data = data;
		this.edges = [];
	}

	addEdge(vertex) {
		if (vertex instanceof Vertex) {
			this.edges.push(new Edge(this, vertex, weight));
		} else {
			throw new Error('not a vertex instance!');
		}
	}

	removeEdge(vertex) {
		this.edges = this.edges.filter((edge) => edge.end !== vertex);
	}

	print() {
		const edgeList =
			this.edges.map((edge) =>
				edge.weight !== null
					? `${edge.end.data} (${edge.weight})`
					: edge.end.data
			) || [];

		const output = `${this.data} --> ${edgeList.join(', ')}`;
		console.log(output);
	}
}

module.exports = Vertex;

class Graph {
	constructor(isWeighted = false, isDirected = false) {
		this.vertices = [];
		this.isWeighted = isWeighted;
		this.isDirected = isDirected;
	}

	addVertex(data) {
		const newVert = new Vertex(data);
		this.vertices.push(newVert);
		return newVert;
	}

	removeVertex(vertex) {
		this.vertices.forEach((vert) => {
			if (vert === vertex) {
				this.vertices.splice(vert, 1);
			}
		});
	}

	addEdge(vertexOne, vertexTwo, weight) {
		const edgeWeight = this.isWeighted ? weight : null;

		if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
			vertexOne.addEdge(vertexTwo, edgeWeight);
			if (this.isDirected === false) {
				vertexTwo.addEdge(vertexOne, edgeWeight);
			}
		} else {
			throw new Error('Expected Vertex arguments.');
		}
	}

	removeEdge(vertexOne, vertexTwo) {
		if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
			vertexOne.removeEdge(vertexTwo);
			if (this.isDirected === false) {
				vertexTwo.removeEdge(vertexOne);
			}
		} else {
			throw new Error('Expected Vertex arguments.');
		}
	}

	print() {
		const vertexList = this.vertices || [];
		vertexList.forEach((vertex) => vertex.print());
	}
}

module.exports = Graph;

//Example
const trainNetwork = new Graph(true, true);

const losAngelesStation = trainNetwork.addVertex('Los Angeles');
const sanFranciscoStation = trainNetwork.addVertex('San Francisco');
const newYorkStation = trainNetwork.addVertex('New York');
const atlantaStation = trainNetwork.addVertex('Atlanta');
const denverStation = trainNetwork.addVertex('Denver');
const calgaryStation = trainNetwork.addVertex('Calgary');

trainNetwork.addEdge(sanFranciscoStation, losAngelesStation, 400);
trainNetwork.addEdge(losAngelesStation, sanFranciscoStation, 400);
trainNetwork.addEdge(newYorkStation, denverStation, 1800);
trainNetwork.addEdge(denverStation, newYorkStation, 1800);
trainNetwork.addEdge(calgaryStation, denverStation, 1000);
trainNetwork.addEdge(denverStation, calgaryStation, 1000);
trainNetwork.addEdge(losAngelesStation, atlantaStation, 2100);
trainNetwork.addEdge(atlantaStation, losAngelesStation, 2100);

trainNetwork.removeEdge(newYorkStation, denverStation);
trainNetwork.removeEdge(calgaryStation, denverStation);
trainNetwork.removeEdge(denverStation, calgaryStation);
trainNetwork.removeVertex(calgaryStation);

trainNetwork.print();

//////////////////////////////////////////////////////
