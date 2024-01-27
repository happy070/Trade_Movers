import { useEffect, useState } from "react";
import user from "./user.context";
import {
  doLoginLocalStorage,
  doLogoutFromLocalStorage,
  getDataFromLocalStorage,
  isLoggedIn,
} from "../auth/helper.auth";

const UserProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUserData(getDataFromLocalStorage());
  }, []);

  const doLogin = (ResponseData) => {
    doLoginLocalStorage(ResponseData);
    setLogin(true);
    setUserData(getDataFromLocalStorage());
  };

  const doLogout = () => {
    doLogoutFromLocalStorage();
    setLogin(false);
    setUserData(null);
  };

  return (
    <user.Provider
      value={{
        userData: userData,
        setUserData: setUserData,
        isLogin: isLogin,
        setLogin: setLogin,
        login: doLogin,
        logout: doLogout,
      }}
    >
      {children}
    </user.Provider>
  );
};
export default UserProvider;
