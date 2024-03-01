import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
} from "react-bootstrap";

const AddCarousel = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Container className="text-center">
            <p className="text-muted mt-3">Image Preview</p>
            <img style={{ maxHeight: "250px" }} className="img-fluid" alt="" />
          </Container>
          <FormLabel>Select Product Image</FormLabel>
          <InputGroup>
            <FormControl
              type="File"
              onChange={(event) => handleFileChange(event)}
            />
            <Button variant="secondary">clear</Button>
          </InputGroup>
          <FormLabel className="text-muted">
            Only jpg/png files are supported
          </FormLabel>
        </FormGroup>
        <FormGroup>
          <Container className="text-center">
            <p className="text-muted mt-3">Image Preview</p>
            <img style={{ maxHeight: "250px" }} className="img-fluid" alt="" />
          </Container>
          <FormLabel>Select Product Image</FormLabel>
          <InputGroup>
            <FormControl
              type="File"
              onChange={(event) => handleFileChange(event)}
            />
            <Button variant="secondary">clear</Button>
          </InputGroup>
          <FormLabel className="text-muted">
            Only jpg/png files are supported
          </FormLabel>
        </FormGroup>
        <FormGroup>
          <Container className="text-center">
            <p className="text-muted mt-3">Image Preview</p>
            <img style={{ maxHeight: "250px" }} className="img-fluid" alt="" />
          </Container>
          <FormLabel>Select Product Image</FormLabel>
          <InputGroup>
            <FormControl
              type="File"
              onChange={(event) => handleFileChange(event)}
            />
            <Button variant="secondary">clear</Button>
          </InputGroup>
          <FormLabel className="text-muted">
            Only jpg/png files are supported
          </FormLabel>
        </FormGroup>
        <FormGroup>
          <Container className="text-center">
            <p className="text-muted mt-3">Image Preview</p>
            <img style={{ maxHeight: "250px" }} className="img-fluid" alt="" />
          </Container>
          <FormLabel>Select Product Image</FormLabel>
          <InputGroup>
            <FormControl
              type="File"
              onChange={(event) => handleFileChange(event)}
            />
            <Button variant="secondary">clear</Button>
          </InputGroup>
          <FormLabel className="text-muted">
            Only jpg/png files are supported
          </FormLabel>
        </FormGroup>
        <FormGroup>
          <Container className="text-center">
            <p className="text-muted mt-3">Image Preview</p>
            <img style={{ maxHeight: "250px" }} className="img-fluid" alt="" />
          </Container>
          <FormLabel>Select Product Image</FormLabel>
          <InputGroup>
            <FormControl
              type="File"
              onChange={(event) => handleFileChange(event)}
            />
            <Button variant="secondary">clear</Button>
          </InputGroup>
          <FormLabel className="text-muted">
            Only jpg/png files are supported
          </FormLabel>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddCarousel;
