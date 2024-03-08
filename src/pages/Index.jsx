import MyNavbar from "../MyComponents/MyNavbar";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  FormControl,
  FormGroup,
  Row,
  Form,
  Carousel,
} from "react-bootstrap";
import "../../src/index.css";
import StoreView from "../MyComponents/StoreView.jsx";
import Footer from "../MyComponents/Footer.jsx";

import OurAchivements from "../assets/Clients/achivements.jpg";
import oc1 from "../assets/Clients/oc1.jpg";
import oc2 from "../assets/Clients/oc2.jpg";
import oc3 from "../assets/Clients/oc3.jpg";
import { useState } from "react";
import { QuickEnquiry } from "../Services/user.service.js";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import IndividualIntervalsExample from "../MyComponents/IndividualIntervalsExample.jsx";
import MyCarousel from "../MyComponents/MyCarousel.jsx";
function Index() {
  const [qEForm, setQEForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const handleChange = (event, property) => {
    setQEForm({
      ...qEForm,
      [property]: event.target.value,
    });
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (qEForm.name == undefined || qEForm.name.trim() == "") {
      toast.error("Name is Required");
    }
    if (qEForm.mobile == undefined || qEForm.mobile.trim() == "") {
      toast.error("Number is Required");
    }
    if (qEForm.message == undefined || qEForm.message.trim() == "") {
      toast.error("Message is Required");
    }
    if (qEForm.email == undefined || qEForm.email.trim() == "") {
      toast.error("Email is Required");
    } else {
      QuickEnquiry(qEForm)
        .then((responseData) => {
          console.log(responseData);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Query Send Successfully!!!",
            showConfirmButton: false,
            timer: 1500,
          });
          handleReset();
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something Went Wrong!!!Please Try Again Later.",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };
  const handleReset = () => {
    setQEForm({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("message").value = "";
  };
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <div>
        {/* Store Product and Category  */}
        <div>
          <StoreView />
        </div>
        <section>
          <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{ backgroundColor: "white", height: "80px" }}
          >
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                marginTop: "10px",
                fontSize: "50px",
                color: "black",
              }}
              className="baseName"
            >
              <b>Our Achievments</b>
            </h1>
          </div>
          <div>
            <img
              src={OurAchivements}
              alt="img not Found"
              style={{ width: "100%" }}
            />
          </div>
        </section>
        <section>
          <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{ backgroundColor: "white", height: "80px" }}
          >
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                marginTop: "10px",
                fontSize: "50px",
                color: "black",
              }}
              className="baseName"
            >
              <b>Clients Who Trust Us</b>
            </h1>
          </div>
          <div>
            <Carousel variant="dark">
              <Carousel.Item>
                <img src={oc1} style={{ width: "100%" }} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={oc2} style={{ width: "100%" }} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={oc3} style={{ width: "100%" }} alt="" />
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        <div
          className="d-flex justify-content-center align-items-center text-center"
          style={{ backgroundColor: "white", height: "80px" }}
        >
          <hr />
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: "10px",
              fontSize: "50px",
              color: "black",
            }}
            className="baseName"
          >
            <b>Testimonials</b>
          </h1>
        </div>
        <div>
          <IndividualIntervalsExample />
        </div>
        <Container fluid className="mt-2">
          <Row className="justify-content-center">
            <Col md={12} xs={12}>
              <Card>
                <CardTitle
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "black",
                    fontSize: "50px",
                  }}
                  className="text-center mt-2"
                >
                  <h1 className="EnquiryTitle">
                    <b>Quick Enquiry</b>
                  </h1>
                </CardTitle>
                <CardBody style={{ backgroundColor: "#3d63ae" }}>
                  <Form onSubmit={HandleSubmit}>
                    <Row>
                      <Col md={3} xs={12}>
                        <FormGroup>
                          <label
                            className="LabelName"
                            style={{ color: "white", fontSize: "20px" }}
                          >
                            Name
                          </label>
                          <FormControl
                            id="name"
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(event) => handleChange(event, "name")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3} xs={12}>
                        <FormGroup>
                          <label
                            className="LabelName"
                            style={{ color: "white", fontSize: "20px" }}
                          >
                            Contact Number
                          </label>
                          <FormControl
                            id="mobile"
                            type="text"
                            placeholder="Enter Your Number"
                            onChange={(event) => handleChange(event, "mobile")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3} xs={12}>
                        <FormGroup>
                          <label
                            className="LabelName"
                            style={{ color: "white", fontSize: "20px" }}
                          >
                            Email
                          </label>
                          <FormControl
                            id="email"
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(event) => handleChange(event, "email")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3} xs={12}>
                        <FormGroup>
                          <label
                            className="LabelName"
                            style={{ color: "white", fontSize: "20px" }}
                          >
                            Message
                          </label>
                          <FormControl
                            id="message"
                            type="text"
                            placeholder="Enter Your Message"
                            onChange={(event) => handleChange(event, "message")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12} xs={8}>
                        <div
                          style={{
                            marginTop: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <Button
                            className="mt-2"
                            variant="primary"
                            type="submit"
                            style={{
                              backgroundColor: "#05215e",
                              color: "white",
                            }}
                          >
                            Submit
                          </Button>
                          &nbsp;
                          <Button
                            onClick={handleReset}
                            className="mt-2"
                            variant="danger"
                            type="reset"
                          >
                            Reset
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md={7} sm={12}>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.9890231744826!2d72.86357466569012!3d19.108137477056374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8381f3aae01%3A0xf897940d73bce76c!2sAkal%20Society%2C%20Tarun%20Bharat%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1708281468449!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowfullscreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ borderRadius: "20px", marginTop: 5 }}
                ></iframe>
              </div>
            </Col>
            <Col md={5} sm={12}>
              <div>
                <h2
                  className="text-center"
                  style={{ fontFamily: "poppins,sans-serif", marginTop: 50 }}
                >
                  Get In Touch <IoIosRocket />
                </h2>
              </div>
              <div style={{ display: "flex", marginTop: 20 }}>
                <div>
                  <IoLocationOutline style={{ width: 40, height: 40 }} />
                </div>
                <p
                  style={{
                    fontFamily: "poppins,sans-serif",
                    marginLeft: 10,
                  }}
                >
                  Trade Movers A301 silver palace akal society JB nagar Andheir
                  east mumbai, Pincode - 400059
                </p>
              </div>
              <div style={{ display: "flex", marginTop: 20 }}>
                <div>
                  <IoMailOpenOutline style={{ width: 40, height: 40 }} />
                </div>
                <a
                  href="mailto:trademover90@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    style={{
                      fontFamily: "poppins,sans-serif",
                      marginTop: 10,
                      marginLeft: 10,
                      color: "black",
                    }}
                  >
                    trademover90@gmail.com
                  </p>
                </a>
              </div>
              <div style={{ display: "flex", marginTop: 20 }}>
                <div>
                  <FaPhoneVolume style={{ width: 40, height: 40 }} />
                </div>
                <a href="tel:+919870801469" style={{ textDecoration: "none" }}>
                  <p
                    style={{
                      fontFamily: "poppins,sans-serif",
                      marginTop: 10,
                      marginLeft: 10,
                      color: "black",
                    }}
                  >
                    +91 9870801469
                  </p>
                </a>
              </div>
              <Col md={12}>
                <a href="https://maps.app.goo.gl/t5KuxYwPNn86nhjZA">
                  <Button
                    style={{
                      width: "100%",
                      marginTop: 30,
                      backgroundColor: "#05215e",
                    }}
                  >
                    Get Direction
                  </Button>
                </a>
              </Col>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
}
export default Index;
