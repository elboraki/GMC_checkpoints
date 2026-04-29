// TaskItem displays one task and exposes edit, delete, and completion actions.
function TaskItem({ task, onDeleteTask, onEditTask, onToggleTask }) {
  function handleEditKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onEditTask(task);
    }
  }

  return (
    <li className={task.completed ? "task-item completed" : "task-item"}>
      <div
        className="task-content"
        onClick={() => onEditTask(task)}
        onKeyDown={handleEditKeyDown}
        role="button"
        tabIndex="0"
      >
        <span className="status-pill">{task.completed ? "Completed" : "Active"}</span>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>

      <div className="task-actions">
        <button className="secondary-button" onClick={() => onEditTask(task)} type="button">
          Edit
        </button>
        <button className="secondary-button" onClick={() => onToggleTask(task.id)} type="button">
          {task.completed ? "Mark active" : "Complete"}
        </button>
        <button className="danger-button" onClick={() => onDeleteTask(task.id)} type="button">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
