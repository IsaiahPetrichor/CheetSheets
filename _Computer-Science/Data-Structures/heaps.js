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

module.exports = MinHeap;
