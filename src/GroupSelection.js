import React from "react";
import { Link } from "react-router-dom";
import { useUserGroupContext } from "./UserGroupContext";

const GroupSelection = () => {
  const { userGroups } = useUserGroupContext();

  return (
    <div className='group-selection-container'>
      <h2 className='group-selection-title'>Select a User Group</h2>
      <ul className='group-list'>
        {userGroups.map((group) => (
          <li key={group.id} className='group-item'>
            <p className='group-number'>Group No {group.id}</p>
            <Link to={`/tasks/${group.id}`} className='group-members-link'>
              {group.members.map((member) => member.name).join(", ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupSelection;
