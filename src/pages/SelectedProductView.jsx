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
import { useParams } from "react-router-dom";
import ShowHtml from "../MyComponents/ShowHtml";
import "../../src/index.css";
import { toast } from "react-toastify";
import { getProduct } from "../Services/product.service";
import { getProductImage } from "../Services/helper.service";
import MyNavbar from "../MyComponents/MyNavbar";
import Footer from "../MyComponents/Footer";
import { MyOrders } from "../Services/user.service";
import Swal from "sweetalert2";
function SelectedProductView() {
  const [qEForm, setQEForm] = useState({
    name: "",
    companyname: "",
    city: "",
    mobile: "",
    email: "",
    productrequest: "",
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
    if (qEForm.companyname == undefined || qEForm.companyname.trim() == "") {
      toast.error("Company Name is Required");
    }
    if (qEForm.city == undefined || qEForm.city.trim() == "") {
      toast.error("City Name is Required");
    }
    if (qEForm.mobile == undefined || qEForm.mobile.trim() == "") {
      toast.error("Number is Required");
    }
    if (qEForm.email == undefined || qEForm.email.trim() == "") {
      toast.error("Email is Required");
    }
    if (
      qEForm.productrequest == undefined ||
      qEForm.productrequest.trim() == ""
    ) {
      toast.error("Product Name is Required");
    }
    if (qEForm.quantity == undefined || qEForm.quantity.trim() == "") {
      toast.error("Quantity is Required");
    } else {
      console.log("This is form data from success", qEForm);
      MyOrders(qEForm)
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
          console.log("This is form data from error", qEForm);
          console.log("Error is comming from : ", error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error Filling details. \n Please Enter Correct Values.",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };
  const handleReset = () => {
    setQEForm({
      name: "",
      companyname: "",
      city: "",
      mobile: "",
      email: "",
      productrequest: "",
      quantity: "",
    });
    document.getElementById("name").value = "";
    document.getElementById("companyname").value = "";
    document.getElementById("city").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("productrequest").value = "";
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
                                    <b>Enquiry Form</b>
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
                                            Company Name
                                          </label>
                                          <FormControl
                                            id="companyname"
                                            type="text"
                                            className="mb-2"
                                            placeholder="Enter Your Company Name"
                                            onChange={(event) =>
                                              handleChange(event, "companyname")
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
                                            City
                                          </label>
                                          <FormControl
                                            id="city"
                                            type="text"
                                            className="mb-2"
                                            placeholder="Enter Your City"
                                            onChange={(event) =>
                                              handleChange(event, "city")
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
                                            Contact Number (Max 10 digit)
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
                                            Product Name
                                          </label>
                                          <FormControl
                                            id="productrequest"
                                            className="mb-2"
                                            type="text"
                                            placeholder="Enter Your Product Name"
                                            onChange={(event) =>
                                              handleChange(
                                                event,
                                                "productrequest"
                                              )
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
                                            id="quantity"
                                            className="mb-2"
                                            type="Number"
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
        <Footer />
      </>
    );
  };
  return product && produdctView();
}
export default SelectedProductView;
