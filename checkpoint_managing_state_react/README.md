# Checkpoint Managing State in React

This project is a React to-do list application for practicing state management. It supports adding, editing, deleting, completing, filtering, validating, and persisting tasks with `localStorage`.

## How to Run Locally

1. Open this folder:

   ```bash
   cd checkpoint_managing_state_react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

## Features

- Add tasks with a required name and description.
- Edit a task by clicking the task card or the Edit button.
- Mark tasks as completed or active.
- Delete tasks after a confirmation prompt.
- Keep tasks saved between sessions using browser `localStorage`.
- Filter tasks by all, active, or completed status.
- Visually distinguish completed tasks from active tasks.

## Project Structure

- `src/App.js`: owns application state, storage syncing, filtering, and task actions.
- `src/components/TaskForm.js`: handles task creation, editing, and validation.
- `src/components/TaskList.js`: renders task collections and the empty state.
- `src/components/TaskItem.js`: displays each task with edit, complete, and delete controls.
- `src/App.css`: application styling.
