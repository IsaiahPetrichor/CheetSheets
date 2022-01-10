const recursiveFactorial = (n) => {
	// Add a condition below
	if (n === 0) {
		return 1;
	}

	if (n > 0) {
		console.log(`Execution context: ${n}`);

		return recursiveFactorial(n - 1) * n;
	}
};

const recursiveSolution = recursiveFactorial(5);
console.log(recursiveSolution);

module.exports = {
	recursiveFactorial,
};

{
	/*
    Recursive case – the conditions under which the function will perform an action and call itself.
    Base case – the conditions under which the function returns a value without making any 
    additional calls to itself.
    In this example, we started by considering the recursive case. With some problems it may be 
    easier to start with the base case. Regardless, when you are dealing with a recursive problem,
    start by considering each of these cases.
    */
}

// Use as LinkedList methods (ignore 'function' call)
{
	function findNodeIteratively(data) {
		let currentNode = this.head;
		while (currentNode !== null) {
			if (currentNode.data === data) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
		return null;
	}

	function findNodeRecursively(data, currentNode = this.head) {
		if (currentNode === null) {
			return null;
		} else if (currentNode.data === data) {
			return currentNode;
		} else {
			return this.findNodeRecursively(data, currentNode.getNextNode());
		}
	}
}
