/*
	We typically represent the vertex-edge relationship of a graph in two ways: an adjacency list or an adjacency matrix.

	An adjacency matrix is a table. Across the top, every vertex in the graph appears as a column. Down the side, every 
	vertex appears again as a row. Edges can be bi-directional, so each vertex is listed twice.

	To find an edge between B and P, we would look for the B row and then trace across to the P column. The contents of 
	this cell represent a possible edge.

	Our diagram uses 1 to mark an edge, 0 for the absence of an edge. In a weighted graph, the cell contains the cost of that edge.

	In an adjacency list, each vertex contains a list of the vertices where an edge exists. To find an edge, one looks 
	through the list for the desired vertex.

	KEY TERMS:
	vertex: A node in a graph.
	edge: A connection between two vertices.
	adjacent: When an edge exists between vertices.
	path: A sequence of one or more edges between vertices.
	disconnected: Graph where at least two vertices have no path connecting them.
	weighted: Graph where edges have an associated cost.
	directed: Graph where travel between vertices can be restricted to a single direction.
	cycle: A path which begins and ends at the same vertex.
	adjacency matrix: Graph representation where vertices are both the rows and the columns. Each cell represents a possible edge.
	adjacency list: Graph representation where each vertex has a list of all the vertices it shares an edge with.
	*/

// Graphs Require 3 Classes Total
class Edge {
	constructor(start, end, weight = null) {
		this.start = start;
		this.end = end;
		this.weight = weight;
	}
}

class Vertex {
	constructor(data) {
		this.data = data;
		this.edges = [];
	}

	addEdge(vertex) {
		if (vertex instanceof Vertex) {
			this.edges.push(new Edge(this, vertex, weight));
		} else {
			throw new Error('not a vertex instance!');
		}
	}

	removeEdge(vertex) {
		this.edges = this.edges.filter((edge) => edge.end !== vertex);
	}

	print() {
		const edgeList =
			this.edges.map((edge) =>
				edge.weight !== null
					? `${edge.end.data} (${edge.weight})`
					: edge.end.data
			) || [];

		const output = `${this.data} --> ${edgeList.join(', ')}`;
		console.log(output);
	}
}

class Graph {
	constructor(isWeighted = false, isDirected = false) {
		this.vertices = [];
		this.isWeighted = isWeighted;
		this.isDirected = isDirected;
	}

	addVertex(data) {
		const newVert = new Vertex(data);
		this.vertices.push(newVert);
		return newVert;
	}

	removeVertex(vertex) {
		this.vertices.forEach((vert) => {
			if (vert === vertex) {
				this.vertices.splice(vert, 1);
			}
		});
	}

	addEdge(vertexOne, vertexTwo, weight) {
		const edgeWeight = this.isWeighted ? weight : null;

		if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
			vertexOne.addEdge(vertexTwo, edgeWeight);
			if (this.isDirected === false) {
				vertexTwo.addEdge(vertexOne, edgeWeight);
			}
		} else {
			throw new Error('Expected Vertex arguments.');
		}
	}

	removeEdge(vertexOne, vertexTwo) {
		if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
			vertexOne.removeEdge(vertexTwo);
			if (this.isDirected === false) {
				vertexTwo.removeEdge(vertexOne);
			}
		} else {
			throw new Error('Expected Vertex arguments.');
		}
	}

	print() {
		const vertexList = this.vertices || [];
		vertexList.forEach((vertex) => vertex.print());
	}
}

//Example
const trainNetwork = new Graph(true, true);

const losAngelesStation = trainNetwork.addVertex('Los Angeles');
const sanFranciscoStation = trainNetwork.addVertex('San Francisco');
const newYorkStation = trainNetwork.addVertex('New York');
const atlantaStation = trainNetwork.addVertex('Atlanta');
const denverStation = trainNetwork.addVertex('Denver');
const calgaryStation = trainNetwork.addVertex('Calgary');

trainNetwork.addEdge(sanFranciscoStation, losAngelesStation, 400);
trainNetwork.addEdge(losAngelesStation, sanFranciscoStation, 400);
trainNetwork.addEdge(newYorkStation, denverStation, 1800);
trainNetwork.addEdge(denverStation, newYorkStation, 1800);
trainNetwork.addEdge(calgaryStation, denverStation, 1000);
trainNetwork.addEdge(denverStation, calgaryStation, 1000);
trainNetwork.addEdge(losAngelesStation, atlantaStation, 2100);
trainNetwork.addEdge(atlantaStation, losAngelesStation, 2100);

trainNetwork.removeEdge(newYorkStation, denverStation);
trainNetwork.removeEdge(calgaryStation, denverStation);
trainNetwork.removeEdge(denverStation, calgaryStation);
trainNetwork.removeVertex(calgaryStation);

trainNetwork.print();

module.exports = Graph;
