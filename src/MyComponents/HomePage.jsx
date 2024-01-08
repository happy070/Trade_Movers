import React from "react";
import MyNavbar from "./MyNavbar";
import Base from "./Base";

function HomePage() {
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
      </Base>
    </>
  );
}
export default HomePage;
