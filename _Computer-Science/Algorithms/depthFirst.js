const Graph = require('../Data-Structures/graphs');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
	callback(start);

	start.edges.forEach((edge) => {
		const neighbor = edge.end;

		if (!visitedVertices.includes(neighbor)) {
			visitedVertices.push(neighbor);
			depthFirstTraversal(neighbor, callback, visitedVertices);
		}
	});
};

// examples
const sampleGraph = new Graph(false, false);

depthFirstTraversal(sampleGraph.vertices[0], (vertex) => {
	console.log(vertex.data);
});

depthFirstTraversal(sampleGraph.vertices[0]);
