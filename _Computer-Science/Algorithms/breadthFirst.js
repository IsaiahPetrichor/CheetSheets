const Graph = require('../Data-Structures/graphs');
const Queue = require('../Data-Structures/queues');

/*
	Breadth-First Traversal
	breadth-first iterates through the whole graph in layers by going down one layer, 
	which comprises the start vertex’s direct neighbors. Then it proceeds down to 
	the next layer which consists of all the vertices that are neighbors of the 
	vertices in the previous layer.
	*/

// Example
const breadthFirstTraversal = (start) => {
	const visitedVertices = [start];
	const visitQueue = new Queue();
	visitQueue.enqueue(start);
	while (!visitQueue.isEmpty()) {
		const current = visitQueue.dequeue();
		console.log(current.data);
		current.edges.forEach((edge) => {
			const neighbor = edge.end;

			if (!visitedVertices.includes(neighbor)) {
				visitedVertices.push(neighbor);
				visitQueue.enqueue(neighbor);
			}
		});
	}
};

const sampleGraph = new Graph(false, false);

breadthFirstTraversal(sampleGraph.vertices[0]);
