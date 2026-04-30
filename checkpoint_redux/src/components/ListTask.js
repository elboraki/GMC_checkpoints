import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') {
      return task.isDone;
    }

    if (filter === 'notDone') {
      return !task.isDone;
    }

    return true;
  });

  if (filteredTasks.length === 0) {
    return <p className="empty-state">No tasks match the selected filter.</p>;
  }

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;
