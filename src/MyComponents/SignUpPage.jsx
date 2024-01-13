import React, { useState } from "react";
import MyNavbar from "./MyNavbar";
import Base from "./Base";
import Logo from "../assets/LogoPNG.png";
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
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    about: "",
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
    if (data.name == undefined || data.name.trim() == "") {
      toast.error("please Enter Name");
    }
    if (data.email == undefined || data.email.trim() == "") {
      toast.error("Email is Required");
    }
    if (data.password == undefined || data.password.trim() == "") {
      toast.error("Password is Required");
    }
    if (data.password != data.confirmPassword) {
      toast.error("Password didn't matched try again");
    } else {
      setLoading(true);
      registerUser(data)
        .then((userData) => {
          toast.success("User Created Successfully");
          handleReset();
          navigate("/LoginPage");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong");
        })
        .finally(() => {
          setLoading(false);
          navigate("/LoginPage");
        });
    }
  };
  const handleReset = () => {
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      about: "",
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
        title="Happy Electronics / SignUp Form"
        description="Kindly Create an Account by Filling Up The Form Below."
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
                      <i class="fa-solid fa-user-plus fa-2x"></i>
                      <br />
                      <i>
                        <b>Kindly Fill Out Form To Register</b>
                      </i>
                    </div>
                  </div>
                  <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>
                        <i>Name</i>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Name"
                        onChange={(event) => handleChange(event, "name")}
                      />
                    </Form.Group>
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>
                        <i>Re-Enter Password</i>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Re-Enter your password"
                        onChange={(event) =>
                          handleChange(event, "confirmPassword")
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <div>Select Your Gender</div>
                      <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        value={"male"}
                        type={"radio"}
                        id={`gender`}
                        checked={data.gender === "male"}
                        onChange={(event) => handleChange(event, "gender")}
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        value={"female"}
                        type={"radio"}
                        id={`gender`}
                        checked={data.gender === "female"}
                        onChange={(event) => handleChange(event, "gender")}
                      />
                    </Form.Group>
                    <Form.Group className="mt-2">
                      <Form.Label>Write something about yourself</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                        onChange={(event) => handleChange(event, "about")}
                      />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Agree to T&C" />
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
                      Already Register?<a href="/LoginPage">Login!</a>
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

export default SignUpPage;
