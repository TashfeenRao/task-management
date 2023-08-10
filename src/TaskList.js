import { useEffect } from "react";
import Task from "./Task";
import { useTaskContext } from "./TaskContext";
import { useUserGroupContext } from "./UserGroupContext";

const TaskList = ({ groupId }) => {
  const { tasks, completeTask, deleteTask } = useTaskContext();

  return (
    <ul>
      {tasks &&
        tasks
          .filter((task) => task.groupId === groupId)
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
              groupId={groupId}
            />
          ))}
    </ul>
  );
};

export default TaskList;
