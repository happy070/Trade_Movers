import React from "react";
import MyNavbar from "../MyComponents/MyNavbar";
import { Col, Container, Row } from "react-bootstrap";
import OurMission from "../assets/Mission.png";
import About from "../assets/AboutUS.png";
import Ourvision from "../assets/Vision.png";
import Footer from "../MyComponents/Footer";
import "../pages/AboutPage.css";
function AboutPage() {
  return (
    <>
      <MyNavbar />
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ backgroundColor: "#98b8f5", height: "100px" }}
      >
        <h2
          style={{
            fontFamily: "Sixtyfour, sans-serif",
            marginTop: "25px",
            backgroundColor: "#05215e",
            color: "white",
            boxShadow: "0 5px 8px rgba(0, 0, 0, 0.9)",
          }}
          className="baseName"
        >
          About Us
        </h2>
      </div>
      <div>
        <Container>
          <Row>
            <Col md={7}>
              <h3
                className="AboutUsHeading"
                style={{ fontFamily: "Sixtyfour, sans-serif", marginTop: 30 }}
              >
                Who Are We?
              </h3>
              <p style={{ fontSize: "22px" }} className="AboutUsPara">
                Trade Movers Started its journey in the year 2011, Since then We
                had been redefining merchandising & promotional gifting trends
                to strengthen our customer businesses, by offering innovative,
                Quality & reasonably priced products . Our thought-process and
                commitments made us a prominent corporate gifts supplier in
                industry, Our dedicated team, who understand the ever-changing
                needs of clients and come out with solutions true to their
                satisfaction. Trade movers had been serving customers across
                various business sectors & cities.
              </p>
            </Col>
            <Col md={5}>
              <img
                style={{ width: 400, marginLeft: 5 }}
                src={About}
                alt="img not found"
                className="imgTag"
              />
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <img
                style={{ width: 400, marginLeft: 3 }}
                src={OurMission}
                alt="img not found"
                className="imgTag"
              />
            </Col>
            <Col md={7} style={{ marginTop: 50 }}>
              <h3
                style={{ fontFamily: "Sixtyfour, sans-serif", marginTop: 8 }}
                className="AboutUsHeading"
              >
                Our Mission
              </h3>
              <p style={{ fontSize: "22px" }} className="AboutUsPara">
                Our mission is to help businesses strengthen their relationships
                through thoughtful and personalized gifts that leave a lasting
                impression. We believe that every occasion and every age group
                deserves a special and unique gift that reflects your brand and
                values.By understanding your needs and preferences, we strive to
                deliver bespoke gifting solutions that embody the essence of
                your brand while leaving a lasting impression on those who
                receive them.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <h3
                style={{ fontFamily: "Sixtyfour, sans-serif", marginTop: 10 }}
                className="AboutUsHeading"
              >
                Our Vision
              </h3>
              <p style={{ fontSize: "22px" }} className="AboutUsPara">
                At Trade Movers, our vision extends beyond just being a
                corporate gifting provider – we aspire to be recognized as the
                premier choice, trusted and relied upon by businesses not only
                across India but globally. Our commitment is rooted in
                consistently exceeding the expectations of our clients, setting
                the benchmark for excellence in both products and services. With
                an unwavering dedication to quality, innovation, and customer
                satisfaction, we are continually pushing the boundaries to
                redefine the corporate gifting landscape.
              </p>
            </Col>
            <Col md={5}>
              <img
                style={{ width: 400 }}
                src={Ourvision}
                alt="img not found"
                className="imgTag"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default AboutPage;
