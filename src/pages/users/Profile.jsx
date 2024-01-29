import React from "react";
import UserProfile from "../../MyComponents/Users/UserProfile";
import MyNavbar from "../../MyComponents/MyNavbar";
import Base from "../../MyComponents/Base";

const Profile = () => {
  return (
    <>
      <MyNavbar />
      <Base
        title="Update Profile"
        discription="You can edit your profile details"
      >
        <UserProfile
          user={{
            name: "Himanshu Joshi",
            email: "himanshujoshi8006@gmail.com",
            about: "Hello EveryOne",
            gender: "Male",
            roles: [{ roleName: "Admin" }],
          }}
        />
      </Base>
    </>
  );
};

export default Profile;
