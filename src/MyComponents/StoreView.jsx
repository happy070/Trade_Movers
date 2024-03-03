import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../src/index.css";
import { getAllProducts } from "../Services/product.service";
import { toast } from "react-toastify";

import SingleCardItem from "./Users/SingleCardItem";
import SelectedCategoryView from "../pages/users/SelectedCategoryView";
const StoreView = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProducts(0, 10, "addedDate", "desc");
  }, []);

  const loadProducts = (pageNumber, pageSize, sortBy, sortDir) => {
    getAllProducts(pageNumber, pageSize, sortBy, sortDir)
      .then((data) => {
        console.log(data);
        setProduct({ ...data });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error In Loading products");
      });
  };
  const ProductView = () => {
    return (
      product && (
        <>
          <Row>
            {product.content.map((p) => (
              <Col key={p.productId} md={3}>
                <SingleCardItem product={p} />
              </Col>
            ))}
          </Row>
        </>
      )
    );
  };
  return (
    <>
      <Container fluid className="px-5 pt-5">
        <Row>
          <Col
            md={2}
            lg={2}
            xs={12}
            style={{
              paddingTop: "20px",
              borderRight: "1px solid #ccc",
            }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <SelectedCategoryView />
          </Col>
          <Col md={10} className="productview">
            {ProductView()}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default StoreView;
