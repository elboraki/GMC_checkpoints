# React Debugging Guide

## Objective
Use React Developer Tools to identify and fix bugs in this Task Manager application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install React Developer Tools:
   - Chrome: [React Developer Tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
   - Firefox: [React Developer Tools addon](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
   - Or use the standalone app: `npx react-devtools`

3. Start the development server:
```bash
npm run dev
```

## Debugging Tasks

Open the app in your browser and use React DevTools to find and fix these issues:

### Bug 1: Duplicate Key Warning
**Location:** `TaskList.jsx`
**Symptom:** React shows a warning in the console about duplicate keys.
**What to check:** Look at the `key` prop in the task list mapping. Use React DevTools Components tab to inspect the list items.

### Bug 2: Incorrect Active Task Count
**Location:** `TaskStats.jsx`
**Symptom:** The "Active" count is wrong (shows more than total tasks).
**What to check:** Use React DevTools to inspect the `TaskStats` component props and see the calculated values.

### Bug 3: ID Collision on New Tasks
**Location:** `App.jsx`
**Symptom:** Adding multiple tasks, then deleting some, then adding more causes issues.
**What to check:** Look at how new task IDs are generated. Use React DevTools to watch the `tasks` state as you add/delete tasks.

## How to Use React DevTools

1. Open browser DevTools (F12)
2. Go to the **Components** tab
3. Click on components in the tree to inspect their:
   - Props
   - State
   - Hooks
4. Use the **Profiler** tab to record renders
5. Modify state/props directly to test fixes

## Solutions

<details>
<summary>Bug 1 Solution</summary>

In `TaskList.jsx`, change `key={task.title}` to `key={task.id}`. Using title as key causes issues when tasks have the same name.
</details>

<details>
<summary>Bug 2 Solution</summary>

In `TaskStats.jsx`, change `const active = total + completed;` to `const active = total - completed;`.
</details>

<details>
<summary>Bug 3 Solution</summary>

In `App.jsx`, change `id: tasks.length` to `id: Date.now()` or use a counter. Using array length as ID causes collisions after deletions.
</details>
