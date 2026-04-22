// main.js

// graph as adjacency list
const graph = {
  A: [
    ["B", 4],
    ["C", 2]
  ],
  B: [
    ["A", 4],
    ["C", 1],
    ["D", 5]
  ],
  C: [
    ["A", 2],
    ["B", 1],
    ["D", 8],
    ["E", 10]
  ],
  D: [
    ["B", 5],
    ["C", 8],
    ["E", 2]
  ],
  E: [
    ["C", 10],
    ["D", 2]
  ]
};

function primMST(graph, start) {
  let visited = [start];
  let mst = [];
  let totalCost = 0;

  while (visited.length < Object.keys(graph).length) {
    let minEdge = null;
    let minCost = Infinity;

    for (let node of visited) {
      for (let neighbor of graph[node]) {
        let nextNode = neighbor[0];
        let cost = neighbor[1];

        if (!visited.includes(nextNode) && cost < minCost) {
          minCost = cost;
          minEdge = [node, nextNode, cost];
        }
      }
    }

    if (minEdge === null) {
      console.log("Graph is not connected");
      return;
    }

    mst.push(minEdge);
    totalCost += minEdge[2];
    visited.push(minEdge[1]);
  }

  console.log("Selected connections:");
  for (let edge of mst) {
    console.log(edge[0] + " - " + edge[1] + " : " + edge[2]);
  }

  console.log("Total cost:", totalCost);
}

primMST(graph, "A");