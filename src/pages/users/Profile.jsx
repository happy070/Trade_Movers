import React, { useContext } from "react";
import UserProfile from "../../MyComponents/Users/UserProfile";
import MyNavbar from "../../MyComponents/MyNavbar";
import Base from "../../MyComponents/Base";
import UserContext from "../../Context/user.context";

const Profile = () => {
  const userContext = useContext(UserContext);
  console.log("user-Context", userContext);

  return (
    <>
      <MyNavbar />

      <Base
        title="Update Profile"
        discription="You can edit your profile details"
      >
        <UserProfile
          user={{
            name: userContext.userData.user.name,
            email: userContext.userData.user.email,
            about: userContext.userData.user.about,
            gender: userContext.userData.user.gender,
            roles: userContext.userData.user.roles,
          }}
        />
      </Base>
    </>
  );
};

export default Profile;
