import { useEffect, useMemo, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const STORAGE_KEY = "checkpoint-managing-state-tasks";

const starterTasks = [
  {
    id: crypto.randomUUID(),
    name: "Review React state",
    description: "Practice updating arrays and objects without mutating state.",
    completed: false,
    createdAt: Date.now()
  },
  {
    id: crypto.randomUUID(),
    name: "Persist tasks",
    description: "Save the task list in localStorage between browser sessions.",
    completed: true,
    createdAt: Date.now() - 1000
  }
];

// App owns the task state and passes focused handlers to child components.
function App() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function loadTasks() {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (!savedTasks) {
      return starterTasks;
    }

    try {
      return JSON.parse(savedTasks);
    } catch (error) {
      console.error("Unable to load saved tasks", error);
      return starterTasks;
    }
  }

  function handleSaveTask(taskDetails) {
    if (editingTask) {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === editingTask.id ? { ...task, ...taskDetails } : task
        )
      );
      setEditingTask(null);
      return;
    }

    setTasks((currentTasks) => [
      {
        id: crypto.randomUUID(),
        ...taskDetails,
        completed: false,
        createdAt: Date.now()
      },
      ...currentTasks
    ]);
  }

  function handleToggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteTask(taskId) {
    const confirmed = window.confirm("Are you sure you want to delete this task?");

    if (confirmed) {
      setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));

      if (editingTask?.id === taskId) {
        setEditingTask(null);
      }
    }
  }

  const filteredTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [filter, tasks]);

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="app-shell">
      <section className="app-header">
        <div>
          <p className="eyebrow">React State Checkpoint</p>
          <h1>To-Do List</h1>
        </div>
        <div className="task-stats" aria-label="Task statistics">
          <span>{tasks.length} total</span>
          <span>{completedCount} done</span>
        </div>
      </section>

      <section className="workspace">
        <TaskForm
          editingTask={editingTask}
          onCancelEdit={() => setEditingTask(null)}
          onSaveTask={handleSaveTask}
        />

        <section className="task-panel">
          <div className="filter-bar" aria-label="Task filters">
            {["all", "active", "completed"].map((filterName) => (
              <button
                className={filter === filterName ? "filter-button active" : "filter-button"}
                key={filterName}
                onClick={() => setFilter(filterName)}
                type="button"
              >
                {filterName}
              </button>
            ))}
          </div>

          <TaskList
            tasks={filteredTasks}
            onDeleteTask={handleDeleteTask}
            onEditTask={setEditingTask}
            onToggleTask={handleToggleTask}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
