const LinkedList = require('./linkedLists');

/*
    QUEUES
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

module.exports = Queue;
