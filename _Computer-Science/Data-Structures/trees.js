/*
    Trees are wonderful data structures that can model real life hierarchical information, including organizational charts, 
    genealogical trees, computer file systems, HTML elements on a web page (also known as the Document Object Model, or DOM), 
    state diagrams, and more.
    
    A tree is composed of tree nodes. A tree node is a very simple data structure that contains:
    
    Data
    A list of children, where each child is itself a tree node
    We can add data to and remove data from a tree and traverse it in two different ways:
    
    Depth-first, or
    Breadth-first
*/

class TreeNode {
	constructor(data) {
		(this.data = data), (this.children = []);
	}

	addChild(child) {
		if (child instanceof TreeNode) {
			this.children.push(child);
		} else {
			this.children.push(new TreeNode(child));
		}
	}

	removeChild(childToRemove) {
		const length = this.children.length;

		this.children = this.children.filter((child) => {
			if (childToRemove instanceof TreeNode) {
				if (childToRemove !== child) {
					return true;
				}
				return false;
			} else {
				if (childToRemove !== child.data) {
					return true;
				}
				return false;
			}
		});

		if (length === this.children.length) {
			this.children.forEach((child) => {
				child.removeChild(childToRemove);
			});
		}
	}

	print(level = 0) {
		let result = '';
		for (let i = 0; i < level; i++) {
			result += '-- ';
		}
		console.log(`${result}${this.data}`);
		this.children.forEach((child) => child.print(level + 1));
	}

	depthFirstTraversal() {
		console.log(this.data);
		this.children.forEach((child) => {
			child.depthFirstTraversal();
		});
	}

	breadthFirstTraversal() {
		let queue = [this];

		while (queue.length > 0) {
			const current = queue.shift();
			console.log(current.data);
			queue = queue.concat(current.children);
		}
	}
}

// Example
const menu = new TreeNode('Menu');

const entries = {
	Breakfast: ['Cereal', 'BBQ Chicken', 'Oatmeal'],
	Lunch: ['Soup', 'Sandwich', 'Lasagna'],
	Dinner: ['Yogurt', 'Filet Mignon', 'Fish Florentine'],
};

const meals = Object.keys(entries);
for (let meal = 0; meal < meals.length; meal++) {
	menu.addChild(meals[meal]);
	const entrylist = entries[meals[meal]];
	entrylist.forEach((entry) => {
		menu.children[meal].addChild(entry);
	});
}

menu.print();

menu.removeChild('BBQ Chicken');
menu.removeChild('Yogurt');

menu.children[0].addChild('Yogurt');
menu.children[2].addChild('BBQ Chicken');

const correct = new TreeNode('Corrected Menu');
correct.children = menu.children;

correct.print();
menu.depthFirstTraversal();

module.exports = TreeNode;
