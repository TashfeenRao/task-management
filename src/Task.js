const Task = ({ task, group }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>User Group: {group.name}</p>
      {/* ... (buttons and actions) */}
    </div>
  );
};

export default Task;
