class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(vertex, distance) {
    this.items.push({ vertex, distance });
    this.items.sort((a, b) => a.distance - b.distance);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function createInitialDistances(graph, start) {
  const distances = {};

  for (const vertex of Object.keys(graph)) {
    distances[vertex] = Infinity;
  }

  distances[start] = 0;
  return distances;
}

function dijkstra(graph, start) {
  if (!graph[start]) {
    throw new Error(`Starting vertex "${start}" does not exist in the graph.`);
  }

  const distances = createInitialDistances(graph, start);
  const visited = new Set();
  const priorityQueue = new PriorityQueue();

  priorityQueue.enqueue(start, 0);

  while (!priorityQueue.isEmpty()) {
    const current = priorityQueue.dequeue();
    const currentVertex = current.vertex;

    if (visited.has(currentVertex)) {
      continue;
    }

    visited.add(currentVertex);

    for (const [neighbor, weight] of Object.entries(graph[currentVertex])) {
      if (weight < 0) {
        throw new Error("Dijkstra's algorithm does not support negative weights.");
      }

      const newDistance = distances[currentVertex] + weight;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        priorityQueue.enqueue(neighbor, newDistance);
      }
    }
  }

  return distances;
}

function printDistances(start, distances) {
  console.log(`Shortest distances from ${start}:`);

  for (const [vertex, distance] of Object.entries(distances)) {
    console.log(`${vertex}: ${distance}`);
  }
}

const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

const shortestDistances = dijkstra(graph, "A");

printDistances("A", shortestDistances);
console.log("\nReturned object:");
console.log(shortestDistances);

module.exports = {
  PriorityQueue,
  dijkstra,
};
