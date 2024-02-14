import React from "react";
import MyNavbar from "../MyComponents/MyNavbar";

function AboutPage() {
  return (
    <>
      <MyNavbar />
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ backgroundColor: "#98b8f5", height: "100px" }}
      >
        <h2
          style={{
            fontFamily: "Sixtyfour, sans-serif",
            marginTop: "25px",
            backgroundColor: "#05215e",
            color: "white",
            boxShadow: "0 5px 8px rgba(0, 0, 0, 0.9)",
          }}
          className="baseName"
        >
          Clients Who Trust Us...
        </h2>
      </div>
    </>
  );
}
export default AboutPage;
