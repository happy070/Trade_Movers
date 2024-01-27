import React from "react";
import MyNavbar from "../../MyComponents/MyNavbar";
import Base from "../../MyComponents/Base";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import UserContext from "../../Context/user.context";
import axios from "axios";
import { useContext } from "react";
function HomePage() {
  const userContxt = useContext(UserContext);
  function result() {
    // toast.success("Fetched Users From fake API's", { theme: "dark" });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.table(response);
        toast.success("fetched successfully");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("failed something went wrong");
      });
  }
  return (
    <>
      <MyNavbar />
      <Base
        title="Happy Electronics"
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
