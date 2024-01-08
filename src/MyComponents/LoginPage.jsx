import React from "react";
import MyNavbar from "./MyNavbar";
import Base from "./Base";

function LoginPage() {
  return (
    <>
      <MyNavbar />
      <Base
        title="Welcome to Happy Electronics"
        discription="Kindly Login to Explore Our Tech"
        ButtonEnabled={true}
        ButtonText="Subscribe"
        ButtonType="success"
      >
        <h2>This is Login Page</h2>
      </Base>
    </>
  );
}
export default LoginPage;
