import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    discountedPrice: 0,
    quantity: 1,
    live: false,
    stock: true,
    image: undefined,
    imagePreview: undefined,
  });

  const handleChange = (event, property) => {
    if (property === "live" || property === "stock") {
      setProduct({
        ...product,
        [property]: event.target.checked,
      });
    } else {
      setProduct({
        ...product,
        [property]: event.target.value,
      });
    }
  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type == "image/jpeg"
    ) {
      //preview show
      const reader = new FileReader();
      reader.onload = (r) => {
        setProduct({
          ...product,
          imagePreview: r.target.result,
          image: event.target.files[0],
        });
        console.log(r.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      toast.error("Invalid File !!");
      image.file = null;
    }
  };

  const Reset = () => {
    setProduct({
      title: "",
      description: "",
      price: 0,
      discountedPrice: 0,
      quantity: 1,
      live: false,
      stock: true,
      image: undefined,
      imagePreview: undefined,
    });
  };
  const viewProduct = () => {
    return (
      <>
        <div>
          <Card>
            <CardBody>
              {JSON.stringify(product)}
              <Form>
                <FormGroup>
                  <FormLabel>
                    <i>Product Title</i>
                  </FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter product Title"
                    onChange={(event) => handleChange(event, "title")}
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <FormLabel>
                    <i>Product Description</i>
                  </FormLabel>
                  <FormControl
                    as={"textarea"}
                    placeholder="Enter Product Detail"
                    rows={6}
                    onChange={(event) => handleChange(event, "description")}
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Row>
                    <Col>
                      <FormLabel>
                        <i>Price</i>
                      </FormLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Price"
                        onChange={(event) => handleChange(event, "price")}
                      />
                    </Col>
                    <Col>
                      <FormLabel>
                        <i>Discounted Price</i>
                      </FormLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Discounted Price"
                        onChange={(event) => {
                          if (event.target.value > product.price) {
                            toast.error("Enter Correct value");
                            return;
                          }
                          handleChange(event, "discountedPrice");
                        }}
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="mt-2">
                  <FormLabel>
                    <i>Product Quantity</i>
                  </FormLabel>
                  <FormControl
                    type="Number"
                    placeholder="Enter Your Quantity"
                    onChange={(event) => handleChange(event, "quantity")}
                  />
                </FormGroup>
                <Row className="mt-2">
                  <Col>
                    <FormCheck
                      type="switch"
                      label={"live"}
                      checked={product.live}
                      onChange={(event) => handleChange(event, "live")}
                    />
                  </Col>
                  <Col>
                    <FormCheck
                      type="switch"
                      label={"stock"}
                      checked={product.stock}
                      onChange={(event) => handleChange(event, "stock")}
                    />
                  </Col>
                </Row>
                <FormGroup>
                  <FormLabel>Select Product Image</FormLabel>
                  <FormControl
                    type="File"
                    onChange={(event) => handleFileChange(event)}
                  />
                </FormGroup>
                <div className="mt-2 text-center">
                  <Button className="me-2" variant="success">
                    Add Product
                  </Button>
                  <Button variant="danger" onClick={Reset} type="reset">
                    Clear
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </>
    );
  };

  return <div>{viewProduct()}</div>;
};

export default AddProduct;
