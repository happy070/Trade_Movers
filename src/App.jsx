import React from "react";
import "./App.css";
import HomePage from "./pages/users/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ContactUsPage from "./pages/ContactUsPage";
import Dashboard from "./pages/users/Dashboard";
import { ToastContainer } from "react-toastify";
import UserProvider from "./Context/user.provider";
import AboutUser from "../src/MyComponents/Users/AboutUser";
import Index from "./pages/Index";
import Orders from "./pages/users/Orders";
import AdminDashboard from "./MyComponents/Admin/AdminDashboard";
import AdminHome from "./MyComponents/Admin/AdminHome";
import AddProduct from "./MyComponents/Admin/AddProduct";
import Profile from "./pages/users/Profile";
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

            <Route path="/Users" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="home" element={<HomePage />} />
              <Route path="orders" element={<Orders />} />
              <Route path="about" element={<AboutUser />} />
            </Route>

            <Route path="/Admin" element={<AdminDashboard />}>
              <Route path="home" element={<AdminHome />} />
              <Route path="add-product" element={<AddProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
