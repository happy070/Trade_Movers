import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import whatsapp from "../assets/icons/whatsapp.png";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import "../MyComponents/Footer.jsx";
import Logo from "../assets/TradeMoverLogoWhite.png";
const Footer = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid #000",
          backgroundColor: "#5485f0",
        }}
      >
        <Container style={{ marginTop: 30, color: "#5485f0" }}>
          <Row className="mx-auto">
            <Col
              style={{ borderRadius: "20px" }}
              md={{ span: 6, offset: 3 }}
              className="text-center"
            >
              <h3
                style={{
                  color: "white",
                  fontFamily: "Sixtyfour, sans-serif",
                  fontSize: "15px",
                }}
              >
                For Any Query{" "}
              </h3>
              <Form className="d-flex">
                <Form.Control
                  style={{ borderRadius: "10px" }}
                  type="search"
                  placeholder="Enter Your Email..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button style={{ borderRadius: "10px" }} variant="primary">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: 30 }}>
          <Row className="text-center">
            <Col xs={12} md={4}>
              <div>
                <div>
                  <img src={Logo} style={{ height: "100px" }} alt="" />
                </div>
                <div>
                  <p style={{ fontFamily: "Poppins, sans-serif" }}>
                    Discover the ultimate all-in-one shopping experience with
                    Grocito, We provides a user-friendly platform that enables
                    local sellers to create online stores and sell products to
                    customers in their area more efficiently.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div>
                <div style={{ marginTop: 60 }}>
                  <h3
                    style={{
                      color: "white",
                      fontFamily: "Sixtyfour, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    Quick Links
                  </h3>
                </div>
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  <h5 className="links">ContactUs</h5>
                  <h5 className="links">Privacy Policy</h5>
                  <h5 className="links">Cancellation Policy</h5>
                  <h5 className="links">Terms & Conditions</h5>
                </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="foot">
                <div style={{ marginTop: 60 }}>
                  <h3
                    style={{
                      color: "white",
                      fontFamily: "Sixtyfour, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    Contact Us
                  </h3>
                </div>
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  <img style={{ height: 30 }} src={whatsapp} alt="" />
                  <span style={{ marginLeft: 5 }}>Whatsapp</span>
                  <br></br>
                  <img
                    style={{ height: 30, marginTop: 10 }}
                    src={instagram}
                    alt=""
                  />
                  <span style={{ marginLeft: 5 }}>Instagram</span>
                  <br></br>
                  <img
                    style={{ height: 30, marginTop: 10 }}
                    src={facebook}
                    alt=""
                  />
                  <span style={{ marginLeft: 5 }}>Facebook</span>
                  <br></br>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#05215e", height: "40px" }}>
        <Container>
          <Row>
            <Col xs={6} md={6} className="text-start">
              <h5
                style={{
                  color: "white",
                  fontFamily: "'Sixtyfour', sans-serif",
                  fontSize: "15px",
                }}
                className="mt-2"
              >
                2024 COPYRIGHT : GROCITO
              </h5>
            </Col>
            <Col xs={6} md={6} className="text-end">
              <h5
                style={{
                  color: "white",
                  fontFamily: "'Sixtyfour', sans-serif",
                  fontSize: "15px",
                }}
                className="mt-2"
              >
                Terms|Privacy|Cookies
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
