import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: 1,
      description: 'Review Redux fundamentals',
      isDone: true,
    },
    {
      id: 2,
      description: 'Build the checkpoint todo app',
      isDone: false,
    },
  ],
  filter: 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        description: action.payload,
        isDone: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload);

      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((item) => item.id === id);

      if (task) {
        task.description = description;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
