import React, { useEffect, useState } from "react";
import MyNavbar from "../MyComponents/MyNavbar";
import { Col, Container, Row } from "react-bootstrap";
import OurMission from "../assets/Mission.png";
import About from "../assets/AboutUS.png";
import Ourvision from "../assets/Vision.png";
import Footer from "../MyComponents/Footer";
import "../pages/AboutPage.css";
import Loader from "../assets/icons/loader.gif";
function AboutPage() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowContent(true);
    }, 2400);

    return () => clearTimeout(loaderTimeout);
  }, []);
  return (
    <>
      <div
        style={{
          display: showContent ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <img style={{ width: 200 }} src={Loader} alt="Loading..." />
      </div>
      <div style={{ display: showContent ? "block" : "none" }}>
        <MyNavbar />
        <div
          className="d-flex justify-content-center align-items-center text-center"
          style={{ backgroundColor: "white", height: "100px" }}
        >
          <h2
            style={{
              fontFamily: "poppins, sans-serif",
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
                  style={{
                    fontFamily: "poppins, sans-serif",
                    marginTop: 30,
                    fontSize: "35px",
                  }}
                >
                  <b> Who Are We?</b>
                </h3>
                <p style={{ fontSize: "22px" }} className="AboutUsPara">
                  Trade Movers Started its journey in the year 2011, Since then
                  We had been redefining merchandising & promotional gifting
                  trends to strengthen our customer businesses, by offering
                  innovative, Quality & reasonably priced products . Our
                  thought-process and commitments made us a prominent corporate
                  gifts supplier in industry, Our dedicated team, who understand
                  the ever-changing needs of clients and come out with solutions
                  true to their satisfaction. Trade movers had been serving
                  customers across various business sectors & cities.
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
                  style={{
                    fontFamily: "poppins, sans-serif",
                    marginTop: 8,
                    fontSize: "35px",
                  }}
                  className="AboutUsHeading"
                >
                  <b>Our Mission</b>
                </h3>
                <p style={{ fontSize: "22px" }} className="AboutUsPara">
                  Our mission is to help businesses strengthen their
                  relationships through thoughtful and personalized gifts that
                  leave a lasting impression. We believe that every occasion and
                  every age group deserves a special and unique gift that
                  reflects your brand and values.By understanding your needs and
                  preferences, we strive to deliver bespoke gifting solutions
                  that embody the essence of your brand while leaving a lasting
                  impression on those who receive them.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={7}>
                <h3
                  style={{
                    fontFamily: "poppins, sans-serif",
                    marginTop: 10,
                    fontSize: "35px",
                  }}
                  className="AboutUsHeading"
                >
                  <b> Our Vision</b>
                </h3>
                <p style={{ fontSize: "22px" }} className="AboutUsPara">
                  At Trade Movers, our vision extends beyond just being a
                  corporate gifting provider – we aspire to be recognized as the
                  premier choice, trusted and relied upon by businesses not only
                  across India but globally. Our commitment is rooted in
                  consistently exceeding the expectations of our clients,
                  setting the benchmark for excellence in both products and
                  services. With an unwavering dedication to quality,
                  innovation, and customer satisfaction, we are continually
                  pushing the boundaries to redefine the corporate gifting
                  landscape.
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
      </div>
    </>
  );
}
export default AboutPage;
