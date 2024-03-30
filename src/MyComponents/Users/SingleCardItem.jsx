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
import { Link } from "react-router-dom";
import "../../../src/index.css";
import ShowHtml from "../ShowHtml";
const SingleCardItem = ({ product }) => {
  const truncateDescription = (description) => {
    const words = description.split(" ");
    const truncatedDescription = words.slice(0, 10).join(" ");
    return truncatedDescription;
  };

  return (
    <div className="singleproduct">
      <Card className="m-1 shadow-sm" style={{ width: "300px" }}>
        <CardBody>
          <Container className="text-center">
            <img
              style={{
                width: "150px",
                height: "150px",
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
            <p className="text-muted">
              <div className="mt-1">
                <ShowHtml htmlText={truncateDescription(product.description)} />
              </div>
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
          <Button
            as={Link}
            to={`/products/${product.productId}`}
            onClick={() => {
              console.log(product.productId);
            }}
            className="d-grid"
            style={{ backgroundColor: "#05215e" }}
          >
            View Product
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SingleCardItem;
