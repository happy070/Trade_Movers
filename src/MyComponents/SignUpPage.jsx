import React from "react";
import MyNavbar from "./MyNavbar";
import Base from "./Base";

function SignUpPage() {
  return (
    <>
      <MyNavbar />
      <Base
        title="Welcome to Happy Electronics"
        discription="Kindly SignUp to Register"
      >
        <h2>This is SignUp page</h2>
      </Base>
    </>
  );
}
export default SignUpPage;
