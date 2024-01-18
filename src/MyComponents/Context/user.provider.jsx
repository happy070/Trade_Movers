import { useState } from "react";
import user from "./user.context";
const UserProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <user.Provider
      value={{
        userData: userData,
        setUserData: setUserData,
        isLogin: isLogin,
        setLogin: setLogin,
      }}
    >
      {children}
    </user.Provider>
  );
};
export default UserProvider;
