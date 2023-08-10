import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";
import styles from "./TaskForm.module.css"; // Import the CSS module
import { toast } from "react-toastify";

const TaskForm = ({ groupId }) => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      toast.warning("Add At lease title", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    addTask({ title, description, groupId });
    setTitle("");
    setDescription("");
  };

  return (
    <form className={styles["task-form-container"]} onSubmit={handleSubmit}>
      <h2 className={styles["task-form-title"]}>Add New Task</h2>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles["task-form-input"]}
      />
      <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles["task-form-textarea"]}
      />
      <button type='submit' className={styles["task-form-button"]}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
