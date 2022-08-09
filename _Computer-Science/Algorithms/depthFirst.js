const depthFirstTraversal = (adj, V, visited = [V]) => {
	console.log(V);

	adj[V].forEach((neighbor) => {
		if (!visited.includes(neighbor)) {
			visited.push(neighbor);
			depthFirstTraversal(adj, neighbor, visited);
		}
	});
};

const adjList = [[1, 3], [0, 2], [1], [0]];

depthFirstTraversal(adjList, 0);
