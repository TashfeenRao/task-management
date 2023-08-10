import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useUserGroupContext } from "./UserGroupContext";

const TaskPage = () => {
  const { groupId } = useParams();
  const { userGroups } = useUserGroupContext();
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Link to='/'>Back</Link>}
      {userGroups.find((group) => group.id === parseInt(groupId)) ? (
        <>
          <h2>Tasks for Group {groupId}</h2>
          <TaskForm groupId={groupId} />
          <TaskList groupId={groupId} />
        </>
      ) : (
        <p>Group not found</p>
      )}
    </div>
  );
};

export default TaskPage;
