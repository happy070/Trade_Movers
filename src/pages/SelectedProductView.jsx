import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import pencil from "../assets/icons/pencil.png";
import { useParams } from "react-router-dom";
import ShowHtml from "../MyComponents/ShowHtml";
import "../../src/index.css";
import { toast } from "react-toastify";
import { getProduct } from "../Services/product.service";
import { getProductImage } from "../Services/helper.service";
import MyNavbar from "../MyComponents/MyNavbar";
import Footer from "../MyComponents/Footer";
import IndividualIntervalsExample from "../MyComponents/IndividualIntervalsExample";
function SelectedProductView() {
  const [qEForm, setQEForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    quantity: "",
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
      quantity: "",
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("message").value = "";
    document.getElementById("quantity").value = "";
  };
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    loadUser(productId);
  }, []);

  const loadUser = (productdId) => {
    getProduct(productId)
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => console.log(error));
  };

  const handleAddItem = (productId, quantity) => {
    //if the product is in stock

    addItem(quantity, productId, () => {
      toast.success("Product is added to card");
    });
  };

  const produdctView = () => {
    return (
      <>
        <MyNavbar />
        <Container className="py-4">
          <Row>
            <Col>
              <Card className="mt-4 border border-0 shadow-sm">
                <Card.Body>
                  <Container className=" my-4">
                    <Row>
                      <Col>
                        <img
                          id="SelectedProductViewImg"
                          style={{ width: " 500px " }}
                          src={getProductImage(product.productId)}
                          alt=""
                          onError={(event) => {
                            event.currentTarget.setAttribute(
                              "src",
                              defaultProductImage
                            );
                          }}
                        />
                      </Col>
                      <Col>
                        <h3>{product.title}</h3>
                        <p className="text-muted">
                          Sort description{" "}
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto, velit?
                          </span>{" "}
                        </p>
                        <Badge pill bg="primary">
                          {product.category?.title}
                        </Badge>
                        <Badge
                          className="ms-2"
                          pill
                          bg={product.stock ? "success" : "danger"}
                        >
                          {product.stock ? "In Stock" : " Out of Stock"}
                        </Badge>
                        <Container>
                          <b>
                            <span className="h2 text-muted">
                              <s>₹{product.price}</s>
                            </span>
                          </b>
                          <b>
                            <span className="h2 ms-2">
                              ₹{product.discountedPrice}
                            </span>
                          </b>
                        </Container>
                        <Container className="d-grid mt-4">
                          <Row className="justify-content-center">
                            <Col md={12} xs={12}>
                              <Card>
                                <CardTitle
                                  style={{
                                    fontFamily: "Poppins, sans-serif",
                                    color: "#3d63ae",
                                    fontSize: "50px",
                                  }}
                                  className="text-center mt-2"
                                >
                                  <h1 className="EnquiryTitle">
                                    <b>
                                      <i>Enquiry Form</i>
                                    </b>
                                    <span>
                                      <img
                                        src={pencil}
                                        alt="img not found"
                                        style={{ width: 40 }}
                                      />
                                    </span>{" "}
                                  </h1>
                                </CardTitle>
                                <CardBody>
                                  <Form onSubmit={HandleSubmit}>
                                    <Row>
                                      <Col md={12} xs={12}>
                                        <FormGroup>
                                          <label
                                            className="LabelNameSPV"
                                            style={{
                                              color: "#3d63ae",
                                              fontSize: "20px",
                                            }}
                                          >
                                            Name
                                          </label>
                                          <FormControl
                                            id="name"
                                            type="text"
                                            className="mb-2"
                                            placeholder="Enter Your Name"
                                            onChange={(event) =>
                                              handleChange(event, "name")
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md={12} xs={12}>
                                        <FormGroup>
                                          <label
                                            className="LabelNameSPV"
                                            style={{
                                              color: "#3d63ae",
                                              fontSize: "20px",
                                            }}
                                          >
                                            Contact Number
                                          </label>
                                          <FormControl
                                            id="mobile"
                                            type="text"
                                            className="mb-2"
                                            placeholder="Enter Your Number"
                                            onChange={(event) =>
                                              handleChange(event, "mobile")
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md={12} xs={12}>
                                        <FormGroup>
                                          <label
                                            className="LabelNameSPV"
                                            style={{
                                              color: "#3d63ae",
                                              fontSize: "20px",
                                            }}
                                          >
                                            Email
                                          </label>
                                          <FormControl
                                            id="email"
                                            type="text"
                                            className="mb-2"
                                            placeholder="Enter Your Name"
                                            onChange={(event) =>
                                              handleChange(event, "email")
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md={12} xs={12}>
                                        <FormGroup>
                                          <label
                                            className="LabelNameSPV"
                                            style={{
                                              color: "#3d63ae",
                                              fontSize: "20px",
                                            }}
                                          >
                                            Message
                                          </label>
                                          <FormControl
                                            id="message"
                                            className="mb-2"
                                            type="text"
                                            placeholder="Enter Your Message"
                                            onChange={(event) =>
                                              handleChange(event, "message")
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md={12} xs={12}>
                                        <FormGroup>
                                          <label
                                            className="LabelNameSPV"
                                            style={{
                                              color: "#3d63ae",
                                              fontSize: "20px",
                                            }}
                                          >
                                            Quantity
                                          </label>
                                          <FormControl
                                            id="message"
                                            className="mb-2"
                                            type="text"
                                            placeholder="Required Quantity"
                                            onChange={(event) =>
                                              handleChange(event, "quantity")
                                            }
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
                      </Col>
                    </Row>
                  </Container>

                  <div className="mt-5">
                    <ShowHtml htmlText={product.description} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <IndividualIntervalsExample />
        <Footer />
      </>
    );
  };

  return product && produdctView();
}

export default SelectedProductView;
