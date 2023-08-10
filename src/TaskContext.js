import React, { createContext, useState, useContext, useEffect } from "react";
import { uid } from "uid";
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const taskURL = "http://localhost:5000/tasks";

  useEffect(() => {
    // Fetch initial tasks from the mock API
    fetch(taskURL)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const addTask = async (task) => {
    try {
      const response = await fetch(taskURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...task, id: uid(), completed: false }),
      });

      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const completeTask = async (taskId) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      const response = await fetch(`${taskURL}/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTasks), // Update with your API structure
      });

      if (response.ok) {
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };
  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`${taskURL}/${taskId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
