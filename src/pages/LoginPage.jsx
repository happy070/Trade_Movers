import React, { useContext, useState } from "react";
import MyNavbar from "../MyComponents/MyNavbar";
import Base from "../MyComponents/Base";
import Logo from "../assets/TradeMoversLogo.png";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { loginUser } from "../Services/user.service";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/user.context";
import Footer from "../MyComponents/Footer";

function LoginPage() {
  const userContext = useContext(UserContext);
  const redirect = useNavigate();

  let [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event, property) => {
    setData({
      ...data,
      [property]: event.target.value,
    });
  };
  const [loading, setLoading] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    console.table(data);
    if (data.email == undefined || data.email.trim() == "") {
      toast.error("Email is Required");
    }
    if (data.password == undefined || data.password.trim() == "") {
      toast.error("Password is Required");
    } else {
      setLoading(true);
      loginUser(data)
        .then((responseData) => {
          console.log(responseData);
          toast.success("Logged in Successfully");
          handleReset();
          // userContext.setLogin(true);
          // userContext.setUserData(responseData);
          userContext.login(responseData);

          redirect("/users/home");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  const handleReset = () => {
    setData({
      email: "",
      password: "",
    });
  };
  const [errorData, setErrorData] = useState({
    isError: false,
    errorData: null,
  });
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
            TradeMovers / Log-In
          </h2>
        </div>
      </Container>
      <Container fluid="sm" className="mt-2">
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
            <Card
              className="shadow"
              style={{
                border: "10px solid #dee2e6",
                position: "relative",
                top: -30,
              }}
            >
              <CardBody>
                <div className="text-left">
                  <img
                    src={Logo}
                    alt="img not Found"
                    style={{ width: "80%", marginLeft: 0 }}
                  />
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon icon={faRocket} className="fa-2x" />
                    </div>
                    <i>
                      <b>Kindly Login To Your Account</b>
                    </i>
                  </div>
                </div>
                <Form onSubmit={submitForm}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      <i>Email</i>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Email"
                      onChange={(event) => handleChange(event, "email")}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                      <i>Password</i>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      onChange={(event) => handleChange(event, "password")}
                    />
                  </Form.Group>
                  <div>
                    <Button
                      className="mt-2"
                      variant="primary"
                      type="submit"
                      disabled={loading}
                    >
                      <Spinner
                        animation="border"
                        size="sm"
                        className="me-1"
                        hidden={!loading}
                      ></Spinner>{" "}
                      <span hidden={!loading}>Wait</span>
                      <span hidden={loading}>Submit</span>
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
                </Form>
                <Container className="text-center">
                  <p>
                    Doesn't Have a Account? <a href="/SignUpPage">Signup!</a>
                  </p>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default LoginPage;
