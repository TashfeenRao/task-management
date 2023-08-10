import React from "react";
import { Link } from "react-router-dom";
import { useUserGroupContext } from "./UserGroupContext";

const GroupSelection = () => {
  const { userGroups } = useUserGroupContext();

  return (
    <div>
      <h2>Select a User Group</h2>
      <ul>
        {userGroups.map((group) => (
          <li key={group.id}>
            <Link to={`/tasks/${group.id}`}>{group.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupSelection;
