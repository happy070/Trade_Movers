import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAdminUser } from "../../auth/helper.auth";

const DashBoardView = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const AdminDashboard = () => {
  return isAdminUser() ? <DashBoardView /> : <Navigate to="/LoginPage" />;
};
export default AdminDashboard;
