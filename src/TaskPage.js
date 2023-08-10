import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useUserGroupContext } from "./UserGroupContext";

const TaskPage = () => {
  const { groupId } = useParams();
  const { userGroups } = useUserGroupContext();
  const location = useLocation();
  const isGroupFound = userGroups.find(
    (group) => group.id === parseInt(groupId)
  );

  return (
    <div className='task-page-container'>
      <div className='task-page-header'>
        {location.pathname !== "/" && <Link to='/'>Back</Link>}
        {isGroupFound ? (
          <h2 className='task-page-title'>Tasks for Group {groupId}</h2>
        ) : (
          <p className='task-page-error'>Group not found</p>
        )}
      </div>
      {isGroupFound && (
        <div className='task-page-content'>
          <TaskForm groupId={groupId} />
          <TaskList groupId={groupId} />
        </div>
      )}
    </div>
  );
};

export default TaskPage;
