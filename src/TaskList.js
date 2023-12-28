import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="mb-2">
          {task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
