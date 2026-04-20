class Task {
  constructor(name, startTime, endTime, priority) {
    if (startTime >= endTime) {
      throw new Error("Start time must be before end time.");
    }

    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.priority = priority;
  }
}

const tasks = [
  new Task("Study algorithms", "09:00", "10:30", "High"),
  new Task("Team standup", "10:00", "10:45", "Medium"),
  new Task("Code scheduler", "11:00", "13:00", "High"),
  new Task("Lunch break", "13:00", "14:00", "Low"),
  new Task("Review pull requests", "12:30", "13:30", "Medium"),
  new Task("Plan tomorrow", "16:00", "16:30", "Low"),
];

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function sortTasksByStartTime(taskList) {
  return [...taskList].sort(
    (taskA, taskB) => timeToMinutes(taskA.startTime) - timeToMinutes(taskB.startTime)
  );
}

function groupTasksByPriority(taskList) {
  return taskList.reduce((priorityMap, task) => {
    if (!priorityMap.has(task.priority)) {
      priorityMap.set(task.priority, []);
    }

    priorityMap.get(task.priority).push(task);
    return priorityMap;
  }, new Map());
}

function detectOverlappingTasks(taskList) {
  const sortedTasks = sortTasksByStartTime(taskList);
  const overlaps = [];

  for (let i = 0; i < sortedTasks.length; i++) {
    const currentTask = sortedTasks[i];
    const currentEnd = timeToMinutes(currentTask.endTime);

    for (let j = i + 1; j < sortedTasks.length; j++) {
      const nextTask = sortedTasks[j];

      if (timeToMinutes(nextTask.startTime) >= currentEnd) {
        break;
      }

      overlaps.push([currentTask, nextTask]);
    }
  }

  return overlaps;
}

function estimateMemoryUsage(taskList) {
  const bytesPerCharacter = 2;
  const numberBytes = 8;
  const objectOverheadBytes = 24;

  return taskList.reduce((totalBytes, task) => {
    const textBytes =
      (task.name.length + task.startTime.length + task.endTime.length + task.priority.length) *
      bytesPerCharacter;

    return totalBytes + textBytes + numberBytes * 2 + objectOverheadBytes;
  }, 0);
}

function displayTasks(title, taskList) {
  console.log(`\n${title}`);
  taskList.forEach((task) => {
    console.log(`${task.startTime}-${task.endTime} | ${task.priority} | ${task.name}`);
  });
}

function displayGroupedTasks(priorityMap) {
  console.log("\nTasks grouped by priority:");

  for (const [priority, groupedTasks] of priorityMap) {
    console.log(`${priority}: ${groupedTasks.map((task) => task.name).join(", ")}`);
  }
}

function displayOverlaps(overlaps) {
  console.log("\nOverlapping tasks:");

  if (overlaps.length === 0) {
    console.log("No overlapping tasks found.");
    return;
  }

  overlaps.forEach(([firstTask, secondTask]) => {
    console.log(`${firstTask.name} overlaps with ${secondTask.name}`);
  });
}

displayTasks("Original tasks:", tasks);
displayTasks("Tasks sorted by start time:", sortTasksByStartTime(tasks));
displayGroupedTasks(groupTasksByPriority(tasks));
displayOverlaps(detectOverlappingTasks(tasks));
console.log(`\nEstimated memory usage: ${estimateMemoryUsage(tasks)} bytes`);

module.exports = {
  Task,
  tasks,
  timeToMinutes,
  sortTasksByStartTime,
  groupTasksByPriority,
  detectOverlappingTasks,
  estimateMemoryUsage,
};
