import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedDescription = description.trim();

    if (!trimmedDescription) {
      return;
    }

    dispatch(addTask(trimmedDescription));
    setDescription('');
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTask;
