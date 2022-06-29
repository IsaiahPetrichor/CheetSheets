const LinkedList = require('./linkedLists');

/*
    STACKS
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

module.exports = Stack;
