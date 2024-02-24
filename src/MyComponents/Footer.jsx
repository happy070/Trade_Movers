import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import whatsapp from "../assets/icons/whatsapp.png";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import Linkdin from "../assets/icons/Linkdin.png";
import "../MyComponents/Footer.jsx";
import Logo from "../assets/TradeMoverLogoWhite.png";
import "../MyComponents/Footer.css";
const Footer = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid #000",
          backgroundColor: "#3d63ae",
          marginTop: "5px",
        }}
      >
        <Container
          style={{ marginTop: 30, color: "#3d63ae", marginBottom: "0px" }}
        >
          <Row className="mx-auto">
            <Col
              style={{ borderRadius: "20px" }}
              md={{ span: 6, offset: 3 }}
              className="text-center"
            >
              <h3
                style={{
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                }}
              >
                For Latest Offers
              </h3>
              <Form className="d-flex">
                <Form.Control
                  style={{ borderRadius: "10px" }}
                  type="search"
                  placeholder="Enter Your Email..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#05215e",
                    color: "white",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: 30 }}>
          <Row className="text-center">
            <Col xs={12} md={9}>
              <div>
                <div style={{ marginRight: 10 }}>
                  <img src={Logo} style={{ height: "75px" }} alt="" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      marginTop: "15px",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    Trade Movers Started its journey in the year 2011, Since
                    then We had been redefining merchandising & promotional
                    gifting trends to strengthen our customer businesses, by
                    offering innovative, Quality & reasonably priced products .
                    Our thought-process and commitments made us a prominent
                    corporate gifts supplier in industry, Our dedicated team,
                    who understand the ever-changing needs of clients and come
                    out with solutions true to their satisfaction. Trade movers
                    had been serving customers across various business sectors &
                    cities.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="foot">
                <div style={{ marginTop: 50 }}>
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "20px",
                      marginTop: "-28px",
                      color: "white",
                    }}
                  >
                    Contact Us
                  </h3>
                </div>
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  <a
                    href="https://wa.me/9324483088"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <img
                      style={{ height: 30, marginTop: 12 }}
                      src={whatsapp}
                      alt="WhatsApp"
                    />
                    <span style={{ marginLeft: 5, color: "white" }}>
                      Whatsapp
                    </span>
                  </a>
                  <br />
                  <a
                    href="https://www.instagram.com/trademoverss/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <img
                      style={{ height: 30, marginTop: 10 }}
                      src={instagram}
                      alt="Instagram"
                    />
                    <span style={{ marginLeft: 5, color: "white" }}>
                      Instagram
                    </span>
                  </a>
                  <br />
                  <a
                    href="https://www.facebook.com/profile.php?id=100057406605014"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <img
                      style={{ height: 30, marginTop: 10 }}
                      src={facebook}
                      alt="Facebook"
                    />
                    <span style={{ marginLeft: 5, color: "white" }}>
                      Facebook
                    </span>
                  </a>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/trade-movers-3b376527/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: 28,
                    }}
                  >
                    <img
                      style={{ height: 30, marginTop: 10 }}
                      src={Linkdin}
                      alt="Linkdin"
                    />
                    <span style={{ marginLeft: 4, color: "white" }}>
                      Linkdin
                    </span>
                  </a>
                  <br />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#05215e",
          height: "40px",
        }}
      >
        <Container>
          <Row>
            <Col xs={12} md={12} className="text-start">
              <h5
                style={{
                  color: "white",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "17px",
                  justifyContent: "center",
                  display: "flex",
                }}
                className="mt-2 FooterTerms"
              >
                2024 COPYRIGHT : TRADE-MOVERS ❤️
              </h5>
            </Col>
          </Row>
          <div>
            <a href="https://wa.me/9324483088" class="whatsapp-float">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
