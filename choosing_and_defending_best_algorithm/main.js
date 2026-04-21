const sampleTasks = [
  { start: 1, end: 3 },
  { start: 2, end: 5 },
  { start: 4, end: 6 },
  { start: 6, end: 7 },
  { start: 5, end: 9 },
  { start: 8, end: 10 },
];

const BRUTE_FORCE_BENCHMARK_LIMIT = 24;

function nowInMilliseconds() {
  return Date.now();
}

function sortByStartThenEnd(tasks) {
  return [...tasks].sort((a, b) => a.start - b.start || a.end - b.end);
}

function sortByEndThenStart(tasks) {
  return [...tasks].sort((a, b) => a.end - b.end || a.start - b.start);
}

function bruteForceSelectTasks(tasks) {
  const sortedTasks = sortByStartThenEnd(tasks);
  let bestSelection = [];

  function explore(index, currentSelection, lastEnd) {
    if (index === sortedTasks.length) {
      if (currentSelection.length > bestSelection.length) {
        bestSelection = [...currentSelection];
      }
      return;
    }

    const remainingTasks = sortedTasks.length - index;
    if (currentSelection.length + remainingTasks <= bestSelection.length) {
      return;
    }

    const task = sortedTasks[index];

    if (task.start >= lastEnd) {
      currentSelection.push(task);
      explore(index + 1, currentSelection, task.end);
      currentSelection.pop();
    }

    explore(index + 1, currentSelection, lastEnd);
  }

  explore(0, [], Number.NEGATIVE_INFINITY);
  return bestSelection;
}

function greedySelectTasks(tasks) {
  const sortedTasks = sortByEndThenStart(tasks);
  const selectedTasks = [];
  let lastEnd = Number.NEGATIVE_INFINITY;

  for (const task of sortedTasks) {
    if (task.start >= lastEnd) {
      selectedTasks.push(task);
      lastEnd = task.end;
    }
  }

  return selectedTasks;
}

function generateRandomTasks(count, maxStart = 100000, maxDuration = 100) {
  return Array.from({ length: count }, () => {
    const start = Math.floor(Math.random() * maxStart);
    const duration = Math.floor(Math.random() * maxDuration) + 1;
    return { start, end: start + duration };
  });
}

function benchmark(label, callback) {
  const startTime = nowInMilliseconds();
  const result = callback();
  const endTime = nowInMilliseconds();

  return {
    label,
    result,
    milliseconds: endTime - startTime,
  };
}

function formatTasks(tasks) {
  return tasks.map((task) => `[${task.start}, ${task.end}]`).join(" ");
}

function printBenchmark(benchmarkResult) {
  console.log(
    `${benchmarkResult.label}: selected ${benchmarkResult.result.length} tasks in ` +
      `${benchmarkResult.milliseconds.toFixed(3)} ms`
  );
}

function validateSample() {
  const bruteForceResult = bruteForceSelectTasks(sampleTasks);
  const greedyResult = greedySelectTasks(sampleTasks);
  const sameSize = bruteForceResult.length === greedyResult.length;

  console.log("Sample validation");
  console.log("-----------------");
  console.log(`Brute force result: ${formatTasks(bruteForceResult)}`);
  console.log(`Greedy result:      ${formatTasks(greedyResult)}`);
  console.log(`Both return the same maximum count: ${sameSize} (${greedyResult.length} tasks)`);
}

function runLargeInputBenchmark() {
  const largeTasks = generateRandomTasks(10000);
  const bruteForceTasks = largeTasks.slice(0, BRUTE_FORCE_BENCHMARK_LIMIT);

  console.log("\nLarge input benchmark");
  console.log("---------------------");
  printBenchmark(benchmark("Greedy with 10,000 tasks", () => greedySelectTasks(largeTasks)));
  printBenchmark(
    benchmark(`Brute force with ${BRUTE_FORCE_BENCHMARK_LIMIT} tasks`, () =>
      bruteForceSelectTasks(bruteForceTasks)
    )
  );
  console.log(
    "Brute force with 10,000 tasks is intentionally skipped because it needs exponential time."
  );
}

function runStressTests() {
  const edgeCases = [
    {
      name: "All tasks overlapping",
      tasks: [
        { start: 1, end: 10 },
        { start: 2, end: 9 },
        { start: 3, end: 8 },
        { start: 4, end: 7 },
      ],
    },
    {
      name: "All tasks non-overlapping",
      tasks: [
        { start: 1, end: 2 },
        { start: 2, end: 3 },
        { start: 3, end: 4 },
        { start: 4, end: 5 },
      ],
    },
    {
      name: "Same start or end time",
      tasks: [
        { start: 1, end: 4 },
        { start: 1, end: 3 },
        { start: 3, end: 5 },
        { start: 4, end: 5 },
        { start: 5, end: 7 },
      ],
    },
  ];

  console.log("\nStress tests");
  console.log("------------");

  for (const edgeCase of edgeCases) {
    const bruteForceResult = bruteForceSelectTasks(edgeCase.tasks);
    const greedyResult = greedySelectTasks(edgeCase.tasks);

    console.log(edgeCase.name);
    console.log(`  Brute force: ${bruteForceResult.length} tasks | ${formatTasks(bruteForceResult)}`);
    console.log(`  Greedy:      ${greedyResult.length} tasks | ${formatTasks(greedyResult)}`);
  }
}

function printRecommendation() {
  console.log("\nComparison and recommendation");
  console.log("-----------------------------");
  console.log(
    "The greedy algorithm is faster for large inputs because it sorts tasks by end time once " +
      "and then scans the list, giving O(n log n) time. Brute force explores combinations of " +
      "tasks, so its time complexity is exponential, about O(2^n), and it becomes unusable as " +
      "the input grows. Greedy is also easier to maintain and scale because the logic is short, " +
      "deterministic, and matches the activity-selection problem directly. Memory usage is low " +
      "for both on small inputs, but brute force spends extra stack space and may copy many " +
      "candidate schedules, while greedy keeps only the sorted list and final selection."
  );
  console.log(
    "Final choice: use the greedy algorithm in the delivery backend. It is the right fit for a " +
      "real-time system handling thousands of tasks per second because it is fast, simple, and " +
      "produces the optimal maximum number of non-overlapping tasks for this problem. Brute force " +
      "is still useful for tiny datasets, tests, teaching, or verifying another algorithm's output."
  );
}

validateSample();
runLargeInputBenchmark();
runStressTests();
printRecommendation();

module.exports = {
  sampleTasks,
  bruteForceSelectTasks,
  greedySelectTasks,
  generateRandomTasks,
};
