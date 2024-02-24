import React from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
} from "react-bootstrap";
import { getProductImage } from "../../Services/helper.service";
const SingleCardItem = ({ product }) => {
  return (
    <div>
      <Card className="m-1 shadow-sm" style={{ width: "247px" }}>
        <CardBody>
          <Container className="text-center">
            <img
              style={{
                width: "180px",
                height: "180px",
                objectFit: "contain",
                margin: "2px",
              }}
              src={getProductImage(product.productId)}
              alt="img not found"
            />
          </Container>
          <h5 style={{ fontFamily: "Poppins, sans-serif" }}>
            <b>{product.title}</b>
          </h5>
          <h6>
            <p style={{ fontFamily: "Poppins, sans-serif" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident, fugit.
            </p>
          </h6>
          <h6>
            <Badge pill bg="primary">
              {product.category?.title}
            </Badge>
            <Badge
              className="ms-1"
              pill
              bg={product.stock ? "success" : "danger"}
            >
              {product.stock ? "In Stock" : "Out Of Stock"}
            </Badge>
          </h6>

          <h6 style={{ fontFamily: "Poppins, sans-serif" }}>
            <b>
              {" "}
              Price : &nbsp;
              <span>
                <s>₹{product.price}</s>
              </span>
            </b>
          </h6>
          <h6 style={{ fontFamily: "Poppins, sans-serif" }}>
            <b>
              Discounted Price : &nbsp;<span>₹{product.discountedPrice}</span>
            </b>
          </h6>
        </CardBody>
        <CardFooter>
          <Button className="d-grid" style={{ backgroundColor: "#05215e" }}>
            View Product
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SingleCardItem;
