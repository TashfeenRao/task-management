import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";

const TaskForm = ({ groupId }) => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    addTask({ title, description, groupId });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type='submit'>Add Task</button>
    </form>
  );
};

export default TaskForm;
