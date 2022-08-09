/*
	Breadth-First Traversal
	breadth-first iterates through the whole graph in layers by going down one layer, 
	which comprises the start vertex’s direct neighbors. Then it proceeds down to 
	the next layer which consists of all the vertices that are neighbors of the 
	vertices in the previous layer.
*/

// Example
const breadthFirstTraversal = (adj, V) => {
	// V is the start vertex
	// adj is an adjacency list represented by a 2D array

	// array holding visited verticies
	const visited = new Set([V]);

	// make a queue
	const queue = [V];
	console.log(V);

	while (queue.length > 0) {
		const current = queue.shift();

		adj[current].forEach((neighbor) => {
			const number = Number(neighbor);

			if (!visited.has(number)) {
				visited.add(number);
				queue.push(number);

				console.log(number);
			}
		});
	}
};

const adjList = [[1, 3], [0, 2], [1], [0]];

breadthFirstTraversal(adjList, 0);
