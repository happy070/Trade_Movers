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
import AdminDashboard from "./MyComponents/Admin/AdminDashboard";
import AdminHome from "./MyComponents/Admin/AdminHome";
import AddProduct from "./MyComponents/Admin/AddProduct";
import Profile from "./pages/users/Profile";

import ViewCategory from "./MyComponents/Admin/ViewCategory";
import AddCategory from "./MyComponents/Admin/AddCategory";
import ViewProduct from "./MyComponents/Admin/ViewProduct";
import CategoryStorePage from "./pages/users/CategoryStorePage";
import SelectedProductView from "./pages/SelectedProductView";
import AddCarousel from "./MyComponents/Admin/AddCarousel";
import ShowCarousel from "./MyComponents/Admin/ShowCarousel";
import QuickEnquiry from "./pages/users/QuickEnquiry";
import Orders from "./MyComponents/Admin/Orders";
import MyCategory from "./pages/MyCategory";
import Gallery from "./MyComponents/Gallery";
import ShowTrending from "./MyComponents/Admin/ShowTrending";
import AddTrending from "./MyComponents/Admin/AddTrending";
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
            <Route path="/MyCategory" element={<MyCategory />}></Route>
            <Route path="/gallery" element={<Gallery />} />
            <Route
              path="/products/:productId"
              element={<SelectedProductView />}
            ></Route>
            <Route
              path="/store/:categoryId/:categoryTitle"
              element={<CategoryStorePage />}
            ></Route>

            <Route path="/Users" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="home" element={<HomePage />} />
              <Route path="about" element={<AboutUser />} />
            </Route>

            <Route path="/Admin" element={<AdminHome />}>
              <Route path="home" element={<AdminDashboard />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="view-product" element={<ViewProduct />} />
              <Route path="add-category" element={<AddCategory />} />
              <Route path="view-category" element={<ViewCategory />} />
              <Route path="quick-enquiry" element={<QuickEnquiry />} />
              <Route path="add-carousel" element={<AddCarousel />} />
              <Route path="show-carousel" element={<ShowCarousel />} />
              <Route path="show-trending" element={<ShowTrending />} />
              <Route path="add-trending" element={<AddTrending />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
