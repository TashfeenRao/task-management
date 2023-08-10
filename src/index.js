import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserGroupProvider } from "./UserGroupContext";
import { TaskProvider } from "./TaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserGroupProvider>
    <TaskProvider>
      <App />
    </TaskProvider>
  </UserGroupProvider>
);
