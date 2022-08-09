// ADJACENCY MATRIX TO ADJACENCY LIST

const matrixToList = (matrix) => {
	const adjList = [];

	for (let row = 0; row < matrix.length; row++) {
		adjList[row] = [];
		for (let column = 0; column < matrix[row].length; column++) {
			if (matrix[row][column] === 1) {
				adjList[row].push(column);
			}
		}
	}

	return console.log(adjList);
};

// Example
const matrix = [
	[0, 0, 1],
	[0, 0, 1],
	[1, 1, 0],
];

matrixToList(matrix);

// EDGE LIST TO ADJACENCY LIST

const edgeToList = (edge, n, directed = false) => {
	// 'n' is the number of vertices
	const adjList = [];
	for (let i = n - 1; i >= 0; i--) {
		adjList[i] = [];
	}

	for (let i = 0; i < edge.length; i++) {
		adjList[edge[i][0]].push(edge[i][1]);
		if (!directed) adjList[edge[i][1]].push(edge[i][0]);
	}

	return console.log(adjList);
};

const edgeList = [
	[5, 4],
	[0, 1],
	[0, 2],
	[0, 3],
	[2, 4],
];

edgeToList(edgeList, 6, true);
