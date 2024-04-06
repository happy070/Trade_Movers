import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Pagination,
  Row,
  Table,
  Modal,
  Button,
} from "react-bootstrap";
import { getAllProducts } from "../../Services/product.service";
import SingleProductCard from "./SingleProductCard";
import { getProductImage } from "../../Services/helper.service";
import DefaultImage from "../../assets/default.jpg";
const ViewProduct = () => {
  const [product, setProduct] = useState(undefined);
  const [show, setShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(undefined);
  const closeProductViewModal = () => setShow(false);
  const openProductViewModal = (product) => {
    setCurrentProduct(product);
    console.log(product);
    setShow(true);
  };
  useEffect(() => {
    getProducts(1, 10000, "addedDate", "desc");
    getProducts(1, 10000, "addedDate", "desc");
  }, []);

  const getProducts = (
    pageNumber = 1,
    pageSize = 10000,
    pageSize = 10000,
    sortBy = "addedDate",
    sortDir = "asc"
  ) => {
    getAllProducts(pageNumber, pageSize, sortBy, sortDir)
      .then((data) => {
        console.log("This is all product list", data);
        setProduct({
          ...data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const updateProductList = (productId) => {
    const newArray = product.content.filter((p) => p.productId != productId);
    setProduct({
      ...product,
      content: newArray,
    });
  };
  const productViewModal = () => {
    return (
      currentProduct && (
        <>
          <Modal show={show} onHide={closeProductViewModal}>
            <Modal.Header closeButton>
              <Modal.Title>{currentProduct.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container className="text-center">
                <img
                  style={{ height: "300px", width: "300px" }}
                  src={
                    currentProduct.productImageName
                      ? getProductImage(currentProduct.productId)
                      : DefaultImage
                  }
                  alt="img not Found"
                />
              </Container>
              <Table striped bordered responsive className="text-center">
                <thead>
                  <tr>
                    <th>Info</th>
                    <th>Value</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Product Id</td>
                    <td className="fw-bold">{currentProduct.productId}</td>
                  </tr>
                  {/* <tr>
                    <td>Price</td>
                    <td className="fw-bold"> ₹{currentProduct.price} </td>
                  </tr>
                  <tr>
                    <td>Discounted Price</td>
                    <td className="fw-bold">
                      {" "}
                      ₹{currentProduct.discountedPrice}
                    </td>
                  </tr> */}
                  {/* <tr className={currentProduct.live ? "" : "table-danger"}>
                    <td>Live</td>
                    <td className="fw-bold">
                      {currentProduct.live ? "True" : "False"}
                    </td>
                  </tr> */}
                  <tr>
                    <td>Stock</td>
                    <td className="fw-bold">
                      {currentProduct.stock ? "In Stock" : "Not in Stock"}
                    </td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td className="fw-bold">
                      {currentProduct.category?.title}
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div
                p-3
                border
                border-1
                dangerouslySetInnerHTML={{
                  __html: currentProduct.description,
                }}
              ></div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeProductViewModal}>
                Close
              </Button>
              <Button variant="primary" onClick={closeProductViewModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    );
  };
  const productview = (pageSize) => {
    return (
      <Card>
        <CardBody>
          <h4 className=" text-center mt-3">All Product</h4>

          <h4 className=" text-center mt-3">All Product</h4>

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
                {/* <th>Price</th>
                <th>Discounted Price</th> */}
                {/* <th>Live</th> */}
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
                  updateProductList={updateProductList}
                  openProductViewModal={openProductViewModal}
                />
              ))}
            </tbody>
          </Table>
          <Container className="d-flex justify-content-center">
            <Pagination>
              {
                // [0,1,2,3,4]
                [...Array(product.totalPages)]
                  .map((ob, i) => i)
                  .map((item) => {
                    return product.pageNumber == item ? (
                      <Pagination.Item active key={item}>
                        {item + 1}
                      </Pagination.Item>
                    ) : (
                      <Pagination.Item
                        onClick={(event) => {
                          getProducts(item, pageSize, "addedDate", "desc");
                        }}
                        key={item}
                      >
                        Load Products Load Products
                      </Pagination.Item>
                    );
                  })
              }
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
      {productViewModal()}
    </div>
  );
};

export default ViewProduct;
