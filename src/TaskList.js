import Task from "./Task";
import { useTaskContext } from "./TaskContext";
import { useUserGroupContext } from "./UserGroupContext";

const TaskList = () => {
  const { tasks, completeTask, deleteTask } = useTaskContext();
  const { userGroups } = useUserGroupContext();

  // Add a function to get the user group of a task
  const getGroupById = (groupId) =>
    userGroups.find((group) => group.id === groupId);

  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
          group={getGroupById(task.groupId)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
