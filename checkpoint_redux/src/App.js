import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { setFilter } from './features/tasks/tasksSlice';

const filters = [
  { value: 'all', label: 'All' },
  { value: 'done', label: 'Done' },
  { value: 'notDone', label: 'Not Done' },
];

function App() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  return (
    <main className="app-shell">
      <section className="todo-panel">
        <p className="eyebrow">Redux Checkpoint</p>
        <h1>ToDo Application</h1>
        <p className="subtitle">Add tasks, update them, and filter what you want to focus on.</p>

        <AddTask />

        <div className="filter-row">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className={filter === item.value ? 'filter-button active' : 'filter-button'}
              onClick={() => dispatch(setFilter(item.value))}
            >
              {item.label}
            </button>
          ))}
        </div>

        <ListTask />
      </section>
    </main>
  );
}

export default App;
