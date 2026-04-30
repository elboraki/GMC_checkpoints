import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../features/tasks/tasksSlice';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSave = () => {
    const trimmedDescription = description.trim();

    if (!trimmedDescription) {
      return;
    }

    dispatch(
      editTask({
        id: task.id,
        description: trimmedDescription,
      })
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDescription(task.description);
    setIsEditing(false);
  };

  return (
    <article className={`task-card ${task.isDone ? 'task-card-done' : ''}`}>
      <label className="task-status">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        <span>{task.isDone ? 'Done' : 'In progress'}</span>
      </label>

      {isEditing ? (
        <div className="task-edit-row">
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <div className="task-actions">
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="secondary-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="task-view-row">
          <p>{task.description}</p>
          <button type="button" className="secondary-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </article>
  );
}

export default Task;
