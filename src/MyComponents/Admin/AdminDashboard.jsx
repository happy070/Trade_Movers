import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAdminUser } from "../../auth/helper.auth";
import MyNavbar from "../MyNavbar";

const DashBoardView = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
    </>
  );
};

const AdminDashboard = () => {
  return isAdminUser() ? DashBoardView() : <Navigate to="/LoginPage" />;
};
export default AdminDashboard;
