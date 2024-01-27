import React from "react";
import "./App.css";
import HomePage from "./pages/users/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ContactUsPage from "./pages/ContactUsPage";
import Dashboard from "./pages/users/Dashboard";
import Profile from "./MyComponents/Users/Profile";
import { ToastContainer } from "react-toastify";
import UserProvider from "./Context/user.provider";
import AboutUser from "../src/MyComponents/Users/AboutUser";
import Index from "./pages/Index";
function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/AboutPage" element={<AboutPage />}></Route>
            <Route path="/LoginPage" element={<LoginPage />}></Route>
            <Route path="/SignUpPage" element={<SignUpPage />}></Route>
            <Route path="/ContactUsPage" element={<ContactUsPage />}></Route>
            <Route path="/users" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="home" element={<HomePage />} />
              <Route path="about" element={<AboutUser />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
