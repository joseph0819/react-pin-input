// TodoApp.js
import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState(null);

  const addTask = () => {
    try {
      // Simulate an error in adding a new task
      if (newTask === 'ErrorTask') {
        throw new Error('Failed to add a new task.');
      }

      // Simulate a successful addition
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p className="font-bold">Error: {error}</p>
          <button onClick={clearError} className="bg-red-500 text-white px-2 py-1 rounded-md mt-2">
            Clear Error
          </button>
        </div>
      )}
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
        <button onClick={addTask} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
