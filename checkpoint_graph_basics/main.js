class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
  }

  addEdge(source, destination) {
    this.addVertex(source);
    this.addVertex(destination);

    this.adjacencyList.get(source).add(destination);

    if (!this.isDirected) {
      this.adjacencyList.get(destination).add(source);
    }
  }

  removeEdge(source, destination) {
    if (this.adjacencyList.has(source)) {
      this.adjacencyList.get(source).delete(destination);
    }

    if (!this.isDirected && this.adjacencyList.has(destination)) {
      this.adjacencyList.get(destination).delete(source);
    }
  }

  hasEdge(source, destination) {
    return (
      this.adjacencyList.has(source) &&
      this.adjacencyList.get(source).has(destination)
    );
  }

  printGraph() {
    for (const [vertex, neighbors] of this.adjacencyList) {
      console.log(`${vertex} -> ${Array.from(neighbors).join(", ")}`);
    }
  }

  dfs(startVertex) {
    if (!this.adjacencyList.has(startVertex)) {
      console.log(`Vertex "${startVertex}" does not exist.`);
      return [];
    }

    const visited = new Set();
    const order = [];

    const visit = (vertex) => {
      visited.add(vertex);
      order.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visit(neighbor);
        }
      }
    };

    visit(startVertex);
    console.log(`DFS from ${startVertex}: ${order.join(" -> ")}`);
    return order;
  }

  bfs(startVertex) {
    if (!this.adjacencyList.has(startVertex)) {
      console.log(`Vertex "${startVertex}" does not exist.`);
      return [];
    }

    const visited = new Set([startVertex]);
    const queue = [startVertex];
    const order = [];

    while (queue.length > 0) {
      const vertex = queue.shift();
      order.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    console.log(`BFS from ${startVertex}: ${order.join(" -> ")}`);
    return order;
  }
}

console.log("Undirected graph");
const undirectedGraph = new Graph();

undirectedGraph.addEdge("A", "B");
undirectedGraph.addEdge("A", "C");
undirectedGraph.addEdge("B", "D");
undirectedGraph.addEdge("C", "D");

undirectedGraph.printGraph();
console.log("Has edge A-C:", undirectedGraph.hasEdge("A", "C"));

undirectedGraph.dfs("A");
undirectedGraph.bfs("A");

undirectedGraph.removeEdge("A", "C");
console.log("After removing edge A-C:");
undirectedGraph.printGraph();
console.log("Has edge A-C:", undirectedGraph.hasEdge("A", "C"));

console.log("\nDirected graph");
const directedGraph = new Graph(true);

directedGraph.addEdge("A", "B");
directedGraph.addEdge("A", "C");
directedGraph.addEdge("B", "D");
directedGraph.addEdge("C", "D");

directedGraph.printGraph();
directedGraph.dfs("A");
directedGraph.bfs("A");
