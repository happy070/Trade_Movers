import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { getAllProducts } from "../../Services/product.service";
import SingleProductCard from "./SingleProductCard";
const ViewProduct = () => {
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = (
    pageNumber = 0,
    pageSize = 10,
    sortBy = "addedDate",
    sortDir = "asc"
  ) => {
    getAllProducts(pageNumber, pageSize, sortBy, sortDir)
      .then((data) => {
        console.log(data);
        setProduct({
          ...data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const productview = () => {
    return (
      <Card>
        <CardBody>
          <h4 className=" text-center mt-3">View Product</h4>
          <FormGroup>
            <FormLabel>Search Product</FormLabel>
            <FormControl
              type="text"
              className="mb-3"
              placeholder="search here"
            />
          </FormGroup>
          <Table
            className="text-center"
            striped
            bordered
            responsive
            size="sm"
            hover
          >
            <thead>
              <tr>
                <th>#SN</th>
                <th>Category</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Discounted Price</th>
                <th>Live</th>
                <th>Stock</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.content.map((product, index) => (
                <SingleProductCard
                  key={index}
                  product={product}
                  index={index}
                />
              ))}
            </tbody>
          </Table>
          <Container className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
            </Pagination>
          </Container>
        </CardBody>
      </Card>
    );
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12}>
            {product ? (
              productview()
            ) : (
              <>
                {" "}
                <h2>No Product Found</h2>{" "}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewProduct;
