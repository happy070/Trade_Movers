import React, { useContext } from "react";
import UserProfile from "../../MyComponents/Users/UserProfile";
import MyNavbar from "../../MyComponents/MyNavbar";
import UserContext from "../../Context/user.context";
import { Container } from "react-bootstrap";
import Footer from "../../MyComponents/Footer";

const Profile = () => {
  const userContext = useContext(UserContext);
  console.log("user-Context", userContext);

  return (
    <>
      <MyNavbar />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center text-center"
        style={{ backgroundColor: "#98b8f5", height: "120px" }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Sixtyfour, sans-serif",
              marginTop: "10px",
              backgroundColor: "#05215e",
              color: "white",
              boxShadow: "0 5px 8px rgba(0, 0, 0, 0.9)",
            }}
            className="baseName"
          >
            Update Details
          </h2>
        </div>
      </Container>
      <UserProfile
        user={{
          name: userContext.userData.user.name,
          email: userContext.userData.user.email,
          about: userContext.userData.user.about,
          gender: userContext.userData.user.gender,
          roles: userContext.userData.user.roles,
        }}
      />
      <Footer />
    </>
  );
};

export default Profile;
