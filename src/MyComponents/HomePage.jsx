import React from "react";
import MyNavbar from "./MyNavbar";
import Base from "./Base";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import axios from "axios";
function HomePage() {
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
        <h2>This is Home page</h2>
        <div className="text-center">
          <Button onClick={result}>Enter</Button>
        </div>
      </Base>
    </>
  );
}
export default HomePage;
