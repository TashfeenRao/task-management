import React from "react";
import "./task.css";
import { useUserGroupContext } from "./UserGroupContext";

const Task = ({ task, completeTask, deleteTask, groupId }) => {
  const { userGroups } = useUserGroupContext();

  const getByGroupId = (groupId) =>
    userGroups.find((group) => group.id === parseInt(groupId));

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div className='task-header'>
        <h3>{task.title}</h3>
        <p>User Group: {getByGroupId(groupId).name}</p>
      </div>
      <p className='task-description'>{task.description}</p>
      <div className='task-actions'>
        <button
          className='task-button complete-button'
          onClick={() => completeTask(task.id)}>
          {task.completed ? "Incomplete" : "Complete"}
        </button>
        <button
          className='task-button delete-button'
          onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
