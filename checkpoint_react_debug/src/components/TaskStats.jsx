function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total + completed;

  return (
    <div className="task-stats">
      <div className="stat">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat">
        <span className="stat-number">{active}</span>
        <span className="stat-label">Active</span>
      </div>
      <div className="stat">
        <span className="stat-number">{completed}</span>
        <span className="stat-label">Completed</span>
      </div>
    </div>
  );
}

export default TaskStats;
