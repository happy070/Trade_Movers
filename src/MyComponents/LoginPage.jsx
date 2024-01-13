import React, { useState } from "react";
import MyNavbar from "./MyNavbar";
import Base from "./Base";
import Logo from "../assets/LogoPNG.png";
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
import { registerUser } from "./Services/user.service";

function LoginPage() {
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
      registerUser(data)
        .then((userData) => {
          toast.success("Logged in Successfully");
          handleReset();
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
      <Base
        title="Happy Electronics / LoginUp"
        description="Kindly Login to Your Account."
      >
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
                      <Button className="mt-2" variant="primary" type="submit">
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
      </Base>
    </>
  );
}

export default LoginPage;
