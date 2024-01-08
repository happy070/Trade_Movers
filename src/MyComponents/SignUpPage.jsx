import React from "react";
import MyNavbar from "./MyNavbar";
import Base from "./Base";
import { Card, CardBody, CardTitle, Container } from "react-bootstrap";

function SignUpPage() {
  const MyStyle = {
    backgroundColor: "#e2e2e2",
    width: "35rem",
  };
  return (
    <>
      <MyNavbar />
      <Base
        title="Happy Electronics / SignUp Form"
        discription="Kindly Create Account by Filling Up The Form Below."
      >
        <Container className="mb-5 text-center d-flex justify-content-center align-items-center">
          <Card style={MyStyle}>
            <CardTitle>SignUp</CardTitle>
            <CardBody>
              <div className="mb-1">
                <label
                  htmlFor="formcontrollabel"
                  className="form-label text-start"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Yout Name"
                  className="form-control"
                />
              </div>
            </CardBody>
          </Card>
        </Container>
      </Base>
    </>
  );
}
export default SignUpPage;
