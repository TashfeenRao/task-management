import Task from "./Task";
import { useTaskContext } from "./TaskContext";
import { useUserGroupContext } from "./UserGroupContext";

const TaskList = () => {
  const { tasks } = useTaskContext();
  const { userGroups } = useUserGroupContext();

  // Add a function to get the user group of a task
  const getGroupById = (groupId) =>
    userGroups.find((group) => group.id === groupId);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} group={getGroupById(task.groupId)} />
      ))}
    </div>
  );
};

export default TaskList;
