import { useEffect, useState } from "react";
import user from "./user.context";
import { isAdminUser } from "../auth/helper.auth";
import {
  doLoginLocalStorage,
  doLogoutFromLocalStorage,
  getDataFromLocalStorage,
  isLoggedIn,
} from "../auth/helper.auth";

const UserProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  useEffect(() => {
    setLogin(isLoggedIn());
    setIsAdminLogin(isAdminUser());
    setUserData(getDataFromLocalStorage());
  }, []);

  const doLogin = (ResponseData) => {
    doLoginLocalStorage(ResponseData);
    setLogin(true);
    setIsAdminLogin(isAdminUser());
    setUserData(getDataFromLocalStorage());
  };

  const doLogout = () => {
    doLogoutFromLocalStorage();
    setLogin(false);
    setIsAdminLogin(isAdminUser());
    setUserData(null);
  };

  return (
    <user.Provider
      value={{
        userData: userData,
        setUserData: setUserData,
        isLogin: isLogin,
        setLogin: setLogin,
        isAdminLogin: isAdminLogin,
        login: doLogin,
        logout: doLogout,
      }}
    >
      {children}
    </user.Provider>
  );
};
export default UserProvider;
