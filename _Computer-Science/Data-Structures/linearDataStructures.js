// NODES

// Node Linking
/*
Often, due to the data structure, nodes may only be linked to from a single other node. 
This makes it very important to consider how you implement modifying or removing nodes from a data structure.

If you inadvertently remove the single link to a node, that node’s data and any linked nodes could be “lost” to your application.
 When this happens to a node, it is called an orphaned node.
*/

// Node Overview
/*
Contain data, which can be a variety of data types
Contain links to other nodes. If a node has no links, or they are all null, you have reached the end of the path you were following.
Can be orphaned if there are no existing links to them
*/

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}

	setNextNode(node) {
		//adds validation to make sure the linked node is a Node instance
		if (node instanceof Node || node === null) {
			this.next = node;
		} else {
			throw new Error('Next node must be a member of the Node class.');
		}
	}

	getNextNode() {
		return this.next;
	}
}

const strawberryNode = new Node('Berry Tasty');
const vanillaNode = new Node('Vanilla');
const coconutNode = new Node('Coconuts for Coconut');

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;

while (currentNode !== null) {
	console.log(currentNode.data);
	currentNode = currentNode.next;
}

module.exports = Node;

////////////////////////////////////////////////////////////

// LINKED LISTS
{
	/*
	Are comprised of nodes
	The nodes contain a link to the next node (and also the previous node for bidirectional linked lists)
	Can be unidirectional or bidirectional
	Are a basic data structure, and form the basis for many other data structures
	Have a single head node, which serves as the first node in the list
	Require some maintenance in order to add or remove nodes
	The methods we used are an example and depend on the exact use case and/or programming language being used
	*/
}

// LINKED LISTS in JavaScript
class LinkedList {
	constructor() {
		this.head = null;
	}

	addToHead(data) {
		const newHead = new Node(data);
		const currentHead = this.head;
		this.head = newHead;
		if (currentHead) {
			this.head.setNextNode(currentHead);
		}
	}

	addToTail(data) {
		let tail = this.head;
		if (!tail) {
			this.head = new Node(data);
		} else {
			while (tail.getNextNode()) {
				tail = tail.getNextNode();
			}
			tail.setNextNode(new Node(data));
		}
	}

	removeHead() {
		const removedHead = this.head;
		if (!removedHead) return;
		this.head = removedHead.getNextNode();
		return removedHead.data;
	}

	printList() {
		let currentNode = this.head;
		let output = '<head> ';
		while (currentNode !== null) {
			output += currentNode.data + ' ';
			currentNode = currentNode.getNextNode();
		}
		output += '<tail>';
		console.log(output);
	}
}

let seasons = new LinkedList();

seasons.printList();
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

// swaping nodes in a list.

const testList = new LinkedList();
for (let i = 0; i <= 10; i++) {
	testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5);
testList.printList();

function swapNodes(list, data1, data2) {
	console.log(`Swapping ${data1} and ${data2}:`);

	let node1Prev = null;
	let node2Prev = null;
	let node1 = list.head;
	let node2 = list.head;

	if (data1 === data2) {
		console.log('Elements are the same - no swap to be made');
		return;
	}

	while (node1 !== null) {
		if (node1.data === data1) {
			break;
		}
		node1Prev = node1;
		node1 = node1.getNextNode();
	}

	while (node2 !== null) {
		if (node2.data === data2) {
			break;
		}
		node2Prev = node2;
		node2 = node2.getNextNode();
	}

	if (node1 === null || node2 === null) {
		console.log('Swap not possible - one or more element is not in the list');
		return;
	}

	if (node1Prev === null) {
		list.head = node2;
	} else {
		node1Prev.setNextNode(node2);
	}

	if (node2Prev === null) {
		list.head = node1;
	} else {
		node2Prev.setNextNode(node1);
	}

	let temp = node1.getNextNode();
	node1.setNextNode(node2.getNextNode());
	node2.setNextNode(temp);
}

////////////////////////////////////////////////////////////

// DOUBLY LINKED LISTS
{
	/*
	Are comprised of nodes that contain links to the next and previous nodes
	Are bidirectional, meaning it can be traversed in both directions
	Have a pointer to a single head node, which serves as the first node in the list
	Have a pointer to a single tail node, which serves as the last node in the list
	Require the pointers at the head of the list to be updated after addition to or removal of the head
	Require the pointers at the tail of the list to be updated after addition to or removed of the tail
	Require the pointers of the surrounding nodes to be updated after removal from the middle of the list
	*/
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addToHead(data) {
		const newHead = new Node(data);
		const currentHead = this.head;
		if (currentHead) {
			currentHead.setPreviousNode(newHead);
			newHead.setNextNode(currentHead);
		}
		this.head = newHead;
		if (!this.tail) {
			this.tail = newHead;
		}
	}

	addToTail(data) {
		const newTail = new Node(data);
		const currentTail = this.tail;
		if (currentTail) {
			currentTail.setNextNode(newTail);
			newTail.setPreviousNode(currentTail);
		}
		this.tail = newTail;
		if (!this.head) {
			this.head = newTail;
		}
	}

	removeHead() {
		const removedHead = this.head;
		if (!removedHead) return;
		this.head = removedHead.getNextNode();
		if (this.head) {
			this.head.setPreviousNode(null);
		}
		if (removedHead === this.tail) {
			this.removeTail();
		}
		return removedHead.data;
	}

	removeTail() {
		const removedTail = this.tail;
		if (!removedTail) return;
		this.tail = removedTail.getPreviousNode();
		if (this.tail) {
			this.tail.setNextNode(null);
		}
		if (removedTail === this.head) {
			this.removeHead();
		}
		return removedTail.data;
	}

	removeByData(data) {
		let nodeToRemove;
		let currentNode = this.head;
		while (currentNode !== null) {
			if (currentNode.data === data) {
				nodeToRemove = currentNode;
				break;
			}
			currentNode = currentNode.getNextNode();
		}
		if (!nodeToRemove) return null;
		if (nodeToRemove === this.head) {
			this.removeHead();
		} else if (nodeToRemove === this.tail) {
			this.removeTail();
		} else {
			const nextNode = nodeToRemove.getNextNode();
			const previousNode = nodeToRemove.getPreviousNode();
			nextNode.setPreviousNode(previousNode);
			previousNode.setNextNode(nextNode);
		}
		return nodeToRemove;
	}

	printList() {
		let currentNode = this.head;
		let output = '<head> ';
		while (currentNode !== null) {
			output += currentNode.data + ' ';
			currentNode = currentNode.getNextNode();
		}
		output += '<tail>';
		console.log(output);
	}
}

module.exports = DoublyLinkedList;

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.printList();

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData('TimesSquare');
subway.printList();

////////////////////////////////////////////////////////////

// QUEUES
{
	/*
	a queue is a data structure that contains an ordered set of data that follows a 
	FIFO (first in, first out) protocol for accessing that data.

	You can visualize it as a checkout line at a supermarket:

	The customer at the front of the line (equivalent to the head in a queue) is the 
	first customer to pay for their groceries.

	Any new customer must go to the back of the line (the tail of the queue) and wait 
	until everyone in front of them has paid for their groceries, (no line cutters allowed 
	in this supermarket!)

	The supermarket cashier only needs to check out the customer at the front of the line

	Real-life computer science applications of queues are all around us: search algorithms 
	like BFS (breadth-first search), job schedulers that run tasks on our computers, and 
	keyboard processing that interprets our keystrokes are all queue based.
	*/
}

class Queue {
	constructor(maxSize = Infinity) {
		this.queue = new LinkedList();
		this.size = 0;
		this.maxSize = maxSize;
	}

	hasRoom() {
		if (this.size < this.maxSize) return true;
		return false;
	}

	isEmpty() {
		if (this.size === 0) return true;
		return false;
	}

	enqueue(data) {
		if (!this.hasRoom()) throw new Error('Queue is full!');
		this.queue.addToTail(data);
		this.size++;
		console.log(`Added ${data}! Queue size is now ${this.size}.`);
	}

	dequeue() {
		if (this.isEmpty()) throw new Error('Queue is empty!');
		const data = this.queue.removeHead();
		this.size--;
		console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
		return data;
	}
}

module.exports = Queue;

// Example
const load = (flights) => {
	const runway = new Queue(3);
	flights.forEach((flight) => {
		try {
			runway.enqueue(flight);
			console.log(`${flight} taxi to runway.`);
		} catch (e) {
			console.log('Runway full!');
		}
	});
	return runway;
};

const clear = (runway) => {
	while (!runway.isEmpty()) {
		const cleared = runway.dequeue();
		console.log('\nFlights wait...\n');
		console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
	}

	console.log('\nAll planes took off, runway clear.');
};

module.exports = { load, clear };

////////////////////////////////////////////////////////////

// STACKS
{
	/*
	Stacks provide three methods for interaction:

	Push - adds data to the “top” of the stack
	Pop - returns and removes data from the “top” of the stack
	Peek - returns data from the “top” of the stack without removing it

	Stacks mimic a physical “stack” of objects. Consider a set of gym weights.

	Each plate has a weight (the data). The first plate you add, or push, onto the 
	floor is both the bottom and top of the stack. Each weight added becomes the 
	new top of the stack.

	At any point, the only weight you can remove, or pop, from the stack is the top 
	one. You can peek and read the top weight without removing it from the stack.

	The last plate that you put down becomes the first, and only, one that you 
	can access. This is a Last In, First Out or LIFO structure. A less frequently 
	used term is First In, Last Out, or FILO.
	*/
	/*
	Stacks can be implemented using a linked list as the underlying data structure 
	because it’s more efficient than a list or array.

	Depending on the implementation, the top of the stack is equivalent to the head node 
	of a linked list and the bottom of the stack is equivalent to the tail node.

	A constraint that may be placed on a stack is its size. This is done to limit and 
	quantify the resources the data structure will take up when it is “full”.

	Attempting to push data onto an already full stack will result in a stack overflow. 
	Similarly, if you attempt to pop data from an empty stack, it will result in a stack 
	underflow.
	*/
}

// Example

class Stack {
	constructor(maxSize = Infinity) {
		this.stack = new LinkedList();
		this.maxSize = maxSize;
		this.size = 0;
	}

	hasRoom() {
		return this.size < this.maxSize;
	}

	isEmpty() {
		return this.size === 0;
	}

	push(value) {
		if (this.hasRoom()) {
			this.stack.addToHead(value);
			this.size++;
		}
		throw new Error('Stack is full.');
	}

	pop() {
		if (this.isEmpty()) {
			throw new Error('Stack is empty.');
		}
		const value = this.stack.removeHead();
		this.size--;
		return value;
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}
		return this.stack.head.data;
	}
}

module.exports = Stack;

// Example
// 1. Define an empty pizza stack with a maxSize of 6
const pizzaStack = new Stack(6);

// 2. Add pizzas as they are ready until we fill up the stack
for (let i = 1; i <= 6; i++) {
	pizzaStack.push(`Pizza #${i}`);
}

// 3. Try pushing another pizza to check for overflow
try {
	pizzaStack.push('Pizza #7');
} catch (e) {
	console.log(e);
}

// 4. Peek at the pizza on the top of stack and log its value
console.log(`the first pizza to deliver is ${pizzaStack.peek()}`);

// 5. Deliver all the pizzas from the top of the stack down
for (let i = 6; i > 0; i--) {
	pizzaStack.pop();
}

// 6. Try popping another pizza to check for empty stack
try {
	pizzaStack.pop();
} catch (e) {
	console.log(e);
}

////////////////////////////////////////////////////////////
