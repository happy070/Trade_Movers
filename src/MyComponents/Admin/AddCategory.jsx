import React from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const AddCategory = () => {
  return (
    <div>
      <Container>
        <Card>
          <CardBody>
            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                marginTop: "9px",
              }}
              className="text-center"
            >
              Add Your Category
            </h3>
            <Form>
              <FormGroup>
                <FormLabel>
                  <i>Category Name</i>
                </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter Product Name"
                  style={{ border: "1px solid #000" }}
                />
                <FormLabel style={{ marginTop: "15px" }}>
                  <i>Category Discription</i>
                </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter Product Discription"
                  style={{
                    border: "1px solid #000",
                    height: "80px",
                  }}
                />
                <FormGroup>
                  <FormLabel style={{ marginTop: "15px" }}>
                    <i>Category icon</i>
                  </FormLabel>
                  <FormControl type="file" />
                </FormGroup>
              </FormGroup>
              <div className="text-center">
                <Button type="submit" variant="primary" style={{ margin: 10 }}>
                  Add
                </Button>
                <Button variant="danger">Clear</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default AddCategory;
