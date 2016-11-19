// BFS algorithm accepts two inputs - graph and source node. 

// Example GRAPH input in form of adjacency list
const adjList = [
	[1, 2, 5],
	[0, 4],
	[0, 5],
	[4, 6],
	[1, 3, 5, 6],
	[0, 2, 4],
	[3, 4]
];

// Example SOURCE NODE input
const sourceNode = 6;

// Array representing queue for keeping track of BF progress
let queue = [];

// Array representing BF tree that will define each node's state, 
// distance and parent node with respect to source node
let bfTree = [];

// Populate BF tree with initial state
adjList.forEach(function(node) {
  bfTree.push({
  	state: "white",
  	distance: undefined,
  	parent: undefined
  });
});

// Set initial state of source node and enqueue it
bfTree[sourceNode].state = "gray";
bfTree[sourceNode].distance = 0;
bfTree[sourceNode].parent = "source";
queue.push(sourceNode);

// Iterate through queue, starting with source node until 
// all accessible nodes have been discovered and defined
while (queue.length > 0) {
	let dequeuedNode = queue.shift();
	adjList[dequeuedNode].forEach(function(adjNode) {
		if (bfTree[adjNode].state == "white") {
			bfTree[adjNode].state = "grey";
			bfTree[adjNode].distance = bfTree[dequeuedNode].distance + 1;
			bfTree[adjNode].parent = dequeuedNode;
			queue.push(adjNode);
		}
	});
	bfTree[dequeuedNode].state = "black";
}

// Output the result of the BF search
bfTree.forEach(function(node) {
	console.log("node #"+bfTree.indexOf(node) + ", distance = " + node.distance + 
		", parent = " + node.parent);
});

/* 
References:

https://www.khanacademy.org/computing/computer-science/algorithms/
breadth-first-search/a/the-breadth-first-search-algorithm

Introduction to Algorithms, Thomas H. Cormen, Charles E. Leiserson, Ronald L. 
Rivest, and Clifford Stein
*/