import MyNavbar from "../MyComponents/MyNavbar";
import watches from "../assets/Carousels/ANALOGWatch.jpg";
import Luggage from "../assets/Carousels/BRANDEDLUGGAGE.jpg";
import BTshirt from "../assets/Carousels/Tshirt.jpg";
import Drink from "../assets/Carousels/drinkware.jpg";
import EcoFriend from "../assets/Carousels/EcoFriendly.jpg";
import Electronics from "../assets/Carousels/Electronics.jpg";
import Vouchers from "../assets/Carousels/GiftVouchers.jpg";
import KitchenItems from "../assets/Carousels/Kitchen.jpg";
import OfficeEssentail from "../assets/Carousels/OfficeEssentials.jpg";
import Onboarding from "../assets/Carousels/Onboarding.jpg";
import giftbox from "../assets/icons/gift.png";
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
} from "react-bootstrap";
import "../../src/index.css";
import CategoryView from "../MyComponents/CategoryView";
import Footer from "../MyComponents/Footer.jsx";
import HandGift from "../assets/HandGiftingP.png";
import LoveGift from "../assets/loveGiftBags.png";
import OurAchivements from "../assets/Clients/achivements.jpg";
import OurCustomer1 from "../assets/Clients/ourcustomer1.png";
import OurCustomer2 from "../assets/Clients/ourcustomer2.png";
import OurCustomer3 from "../assets/Clients/ourcustomer3.png";
import OurCustomer4 from "../assets/Clients/ourcustomer4.png";
import OurCustomer5 from "../assets/Clients/ourcustomer5.png";
import OurCustomer6 from "../assets/Clients/ourcustomer6.png";
import Pencil from "../assets/icons/pencil.png";
import { useState } from "react";
import { QuickEnquiry } from "../Services/user.service.js";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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
  // const [loading, setLoading] = useState(false);
  return (
    <div>
      <MyNavbar />
      <div>
        <Container
          fluid
          className="d-flex justify-content-center align-items-center text-center"
          style={{ backgroundColor: "#98b8f5", height: "120px" }}
        >
          <img
            src={HandGift}
            style={{ height: 120, position: "absolute", left: 0, zIndex: 1 }}
            alt="Left Image"
          />
          <div>
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
              Welcome to Trade Movers...
            </h2>
            <h4
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "26px",
                marginTop: "15px",
              }}
              className="subBaseName"
            >
              Promotional & Corporate Gifting
              <span>
                <img
                  src={giftbox}
                  style={{ height: 40, marginTop: -5 }}
                  alt="image not Found"
                />
              </span>
            </h4>
          </div>
          <img
            src={LoveGift}
            style={{ height: 130, position: "absolute", right: 18, zIndex: 1 }}
            alt="Right Image"
          />
        </Container>
        <div className="overflow-auto">
          <div className="d-flex scroll-container">
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={watches}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Luggage}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={BTshirt}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Onboarding}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Vouchers}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={OfficeEssentail}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={KitchenItems}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Drink}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={EcoFriend}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Electronics}
              text="First slide"
            />
          </div>
        </div>
        <Container fluid className="mt-2">
          <Row>
            <Col md={12} xs={12}>
              <Card style={{ backgroundColor: "#98b8f5" }}>
                <CardTitle
                  style={{
                    fontFamily: "Poppins, sans-serif",
                  }}
                  className="text-center mt-2"
                >
                  <h3 className="EnquiryTitle">
                    Quick Enquiry{" "}
                    <span>
                      <img
                        src={Pencil}
                        alt="img not found"
                        style={{ width: 40 }}
                      />
                    </span>{" "}
                  </h3>
                </CardTitle>
                <CardBody>
                  <Form onSubmit={HandleSubmit}>
                    <Row>
                      <Col md={2} xs={12}>
                        <FormGroup>
                          <label className="LabelName">Name</label>
                          <FormControl
                            id="name"
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(event) => handleChange(event, "name")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={2} xs={12}>
                        <FormGroup>
                          <label className="LabelName">Contact Number</label>
                          <FormControl
                            id="mobile"
                            type="text"
                            placeholder="Enter Your Number"
                            onChange={(event) => handleChange(event, "mobile")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={2} xs={12}>
                        <FormGroup>
                          <label className="LabelName">Email</label>
                          <FormControl
                            id="email"
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(event) => handleChange(event, "email")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={2} xs={12}>
                        <FormGroup>
                          <label className="LabelName">Message</label>
                          <FormControl
                            id="message"
                            type="text"
                            placeholder="Enter Your Message"
                            onChange={(event) => handleChange(event, "message")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={2} xs={8}>
                        <div style={{ marginTop: 15 }}>
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

        <Container fluid className="px-5 pt-5">
          <Row>
            <Col
              md={12}
              lg={2}
              style={{
                paddingTop: "20px",
                borderRight: "1px solid #ccc",
              }}
              className="shadow p-3 mb-5 bg-white rounded"
            >
              <CategoryView />
            </Col>
            <Col md={10}>
              <h3>Product view</h3>
            </Col>
          </Row>
        </Container>
        <section>
          <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{ backgroundColor: "#98b8f5", height: "80px" }}
          >
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
              Clients Who Trust Us...
            </h2>
          </div>
          <div className="overflow-auto">
            <div className="d-flex scroll-container">
              <img
                style={{
                  width: "100%",

                  margin: 10,
                }}
                src={OurCustomer1}
              />
              <img
                style={{
                  width: "100%",
                  margin: 10,
                }}
                src={OurCustomer2}
              />
              <img
                style={{
                  width: "100%",
                  margin: 10,
                }}
                src={OurCustomer3}
              />
              <img
                style={{
                  width: "100%",
                  margin: 10,
                }}
                src={OurCustomer4}
              />
              <img
                style={{
                  width: "100%",
                  margin: 10,
                }}
                src={OurCustomer5}
              />
              <img
                style={{
                  width: "100%",
                  margin: 10,
                }}
                src={OurCustomer6}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <img
              src={OurAchivements}
              alt="img not Found"
              style={{ width: "100%" }}
            />
          </div>
        </section>
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
                <p
                  style={{
                    fontFamily: "poppins,sans-serif",
                    marginTop: 10,
                    marginLeft: 10,
                  }}
                >
                  trademover90@gmail.com
                </p>
              </div>
              <div style={{ display: "flex", marginTop: 20 }}>
                <div>
                  <FaPhoneVolume style={{ width: 40, height: 40 }} />
                </div>
                <p
                  style={{
                    fontFamily: "poppins,sans-serif",
                    marginTop: 10,
                    marginLeft: 10,
                  }}
                >
                  +91 9870801469
                </p>
              </div>
              <Col md={12}>
                <a href="https://maps.app.goo.gl/t5KuxYwPNn86nhjZA">
                  <Button style={{ width: "100%", marginTop: 30 }}>
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
