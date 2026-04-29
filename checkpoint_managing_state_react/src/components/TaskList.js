import TaskItem from "./TaskItem";

// TaskList renders the current task collection or a helpful empty state.
function TaskList({ tasks, onDeleteTask, onEditTask, onToggleTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h2>No tasks here</h2>
        <p>Add a task or switch filters to see more items.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
          onToggleTask={onToggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
