import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminMenu from "./AdminMenu";
import { Outlet } from "react-router-dom";
import MyNavbar from "../MyNavbar";
import Footer from "../Footer";
const AdminHome = () => {
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
            TradeMovers / Admin-Pannel
          </h2>
        </div>
      </Container>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col
            md={3}
            style={{
              paddingTop: "20px",
              borderRight: "1px solid #ccc",
            }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <AdminMenu />
          </Col>
          <Col md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AdminHome;
