import React from "react";
import "./App.css";
import HomePage from "./MyComponents/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./MyComponents/AboutPage";
import LoginPage from "./MyComponents/LoginPage";
import SignUpPage from "./MyComponents/SignUpPage";
import ContactUsPage from "./MyComponents/ContactUsPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/AboutPage" element={<AboutPage />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>
          <Route path="/ContactUsPage" element={<ContactUsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
