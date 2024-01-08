import React from "react";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h2>This is User DashBoard</h2>
      <Outlet />
    </div>
  );
}
export default Dashboard;
