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
		this.previous = null;
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

	setPreviousNode(node) {
		if (node instanceof Node || node === null) {
			this.previous = node;
		} else {
			throw new Error('Previous node must be a member of the Node class.');
		}
	}

	getNextNode() {
		return this.next;
	}

	getPreviousNode() {
		return this.previous;
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
