function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.title}
          className={`task-item ${task.completed ? "completed" : ""} priority-${task.priority}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span className="task-title">{task.title}</span>
          <span className={`priority-badge priority-${task.priority}`}>
            {task.priority}
          </span>
          <button onClick={() => onDelete(task.id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
      {tasks.length === 0 && <p className="empty-message">No tasks to display</p>}
    </ul>
  );
}

export default TaskList;
