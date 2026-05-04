import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: true, priority: "high" },
    { id: 2, title: "Build a project", completed: false, priority: "medium" },
    { id: 3, title: "Debug with DevTools", completed: false, priority: "low" },
  ]);
  const [filter, setFilter] = useState("all");

  const addTask = (title, priority) => {
    const newTask = {
      id: tasks.length,
      title,
      completed: false,
      priority,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskStats tasks={tasks} />
      <div className="filters">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
          All
        </button>
        <button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>
          Active
        </button>
        <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>
          Completed
        </button>
      </div>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
