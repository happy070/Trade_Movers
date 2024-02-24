import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "../../src/index.css";
import { getCategories } from "../Services/category.service";
import { getAllProducts } from "../Services/product.service";
import { toast } from "react-toastify";

import SingleCardItem from "./Users/SingleCardItem";
const StoreView = () => {
  const [categories, setCategories] = useState(null);
  const [product, setProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  useEffect(() => {
    loadCategories(0, 10000);
    loadProducts(0, 10, "addedDate", "desc");
  }, []);

  const loadCategories = (pageNumber, pageSize) => {
    getCategories(pageNumber, pageSize)
      .then((data) => {
        console.log(data);
        setCategories({ ...data });
      })
      .then((error) => {
        console.error(error);
      });
  };

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const commonStyle = {
    cursor: "pointer",
    marginBottom: "5px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
  };
  const selectedStyle = {
    ...commonStyle,
    backgroundColor: "#05215e",
    color: "white",
  };

  const CategoryView = () => {
    return (
      categories && (
        <>
          <h5
            className="text-center category"
            style={{
              fontFamily: "poppins, sans-serif",
              fontSize: "20px",
              boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <b>CATEGORIES</b>
          </h5>
          <Row style={{ backgroundColor: "#f2f5f7" }}>
            <Col xs={6} md={12}>
              <ListGroup>
                <ListGroupItem
                  onClick={() => handleCategoryClick("All Products")}
                  style={
                    selectedCategory === `All Products`
                      ? selectedStyle
                      : commonStyle
                  }
                >
                  <strong className="icon">All Products &nbsp;</strong>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                {categories.content.map((cat, index) => (
                  <ListGroupItem
                    key={index}
                    onClick={() => handleCategoryClick(`${cat.title}`)}
                    style={
                      selectedCategory === `${cat.title}`
                        ? selectedStyle
                        : commonStyle
                    }
                  >
                    <strong className="icon">{cat.title} &nbsp;</strong>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </>
      )
    );
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
            style={{
              paddingTop: "20px",
              borderRight: "1px solid #ccc",
            }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <CategoryView />
          </Col>
          <Col md={10} className="productview">
            <h3>
              <ProductView />
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default StoreView;
