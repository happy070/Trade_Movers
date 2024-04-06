import React from "react";
import MyNavbar from "../../MyComponents/MyNavbar";
import Base from "../../MyComponents/Base";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import UserContext from "../../Context/user.context";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function HomePage() {
  const userContxt = useContext(UserContext);
  const navigate = useNavigate(); // Initialize useNavigate hook

  function result() {
    // Navigate to another page upon button click
    navigate("/Admin/home"); // Replace "/other-page" with the path to your desired page
  }

  return (
    <>
      <MyNavbar />
      <Base
        title="Trade Movers"
        discription="Plug into happiness"
        ButtonEnabled={true}
        ButtonText="Subscribe"
        ButtonType="warning"
      >
        <div className="text-center">
          {/* {JSON.stringify(userContxt)} */}
          <h2>
            Login status: {userContxt.isLogin ? "Logged In" : "Not Logged In"}
          </h2>
          {userContxt.userData && (
            <h2>Hello {userContxt.userData.user?.name}! Welcome to the App</h2>
          )}
          <Button onClick={result}>Enter</Button>
        </div>
      </Base>
    </>
  );
}

export default HomePage;
