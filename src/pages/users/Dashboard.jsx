import React from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../../Context/user.context";
function Dashboard() {
  const userContext = React.useContext(UserContext);

  const DashBoardView = () => {
    return (
      <div>
        <h2>Hi This is DashBoard</h2>
        <Outlet />
      </div>
    );
  };
  return (
    <>
      {userContext.isLogin ? (
        DashBoardView()
      ) : (
        <>
          <h1>You Are not Logged In Please Log-in</h1>{" "}
        </>
      )}
    </>
  );
}
export default Dashboard;
