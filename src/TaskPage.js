import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTaskContext } from "./TaskContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useUserGroupContext } from "./UserGroupContext";

const TaskPage = () => {
  const { groupId } = useParams();
  const { userGroups } = useUserGroupContext();

  return (
    <div>
      {userGroups.find((group) => group.id === parseInt(groupId)) ? (
        <>
          <h2>Tasks for Group {groupId}</h2>
          <TaskForm groupId={groupId} />

          <TaskList groupId={groupId} />
        </>
      ) : (
        "Group not found"
      )}
    </div>
  );
};

export default TaskPage;
