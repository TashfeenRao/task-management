import React, { createContext, useState, useContext } from "react";

const UserGroupContext = createContext();

export const UserGroupProvider = ({ children }) => {
  const [userGroups, setUserGroups] = useState([
    { id: 1, name: "Group 1", members: ["User1", "User2"] },
    { id: 2, name: "Group 2", members: ["User3", "User4"] },
  ]);

  const addUserToGroup = (groupId, username) => {
    const updatedUserGroups = userGroups.map((group) =>
      group.id === groupId
        ? { ...group, members: [...group.members, username] }
        : group
    );
    setUserGroups(updatedUserGroups);
  };

  return (
    <UserGroupContext.Provider value={{ userGroups, addUserToGroup }}>
      {children}
    </UserGroupContext.Provider>
  );
};

export const useUserGroupContext = () => {
  return useContext(UserGroupContext);
};
