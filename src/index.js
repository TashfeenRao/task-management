import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserGroupProvider } from "./UserGroupContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserGroupProvider>
      <App />
    </UserGroupProvider>
  </React.StrictMode>
);
