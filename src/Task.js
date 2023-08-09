import React from "react";
import "./task.css";

const Task = ({ task, completeTask, deleteTask, group }) => {
  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <div className='task-header'>
        <h3>{task.title}</h3>
        <p>User Group: {group.name}</p>
      </div>
      <p className='task-description'>{task.description}</p>
      <div className='task-actions'>
        <button
          className='task-button complete-button'
          onClick={() => completeTask(task.id)}>
          Complete
        </button>
        <button
          className='task-button delete-button'
          onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
