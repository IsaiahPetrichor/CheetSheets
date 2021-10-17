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
/*
Are comprised of nodes
The nodes contain a link to the next node (and also the previous node for bidirectional linked lists)
Can be unidirectional or bidirectional
Are a basic data structure, and form the basis for many other data structures
Have a single head node, which serves as the first node in the list
Require some maintenance in order to add or remove nodes
The methods we used are an example and depend on the exact use case and/or programming language being used
*/

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

////////////////////////////////////////////////////////////

// QUEUES

////////////////////////////////////////////////////////////

// STACKS

////////////////////////////////////////////////////////////
