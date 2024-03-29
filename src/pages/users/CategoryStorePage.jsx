import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsOfCategories } from "../../Services/category.service";
import "../../../src/index.css";
import SingleCardItem from "../../MyComponents/Users/SingleCardItem";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../MyComponents/MyNavbar.jsx";
import SelectedCategoryView from "./SelectedCategoryView.jsx";
import MyCarousel from "../../MyComponents/MyCarousel.jsx";
import Footer from "../../MyComponents/Footer.jsx";
const CategoryStorePage = () => {
  const { categoryId, categoryTitle } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    loadProductsOfCategory(0, 10, "addedDate", "desc");
  }, [categoryId]);

  const loadProductsOfCategory = (pageNumber, pageSize, sortBy, sortDir) => {
    getProductsOfCategories(categoryId, pageNumber, pageSize, sortBy, sortDir)
      .then((data) => {
        console.log("getting product from selected Category", data);
        setProduct({ ...data });
      })
      .catch((error) => {
        console.log(error);
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
      <MyNavbar />
      <MyCarousel />
      <Container fluid className="px-5 pt-5">
        <Row>
          <Col md={12}>
            <SelectedCategoryView />
          </Col>
          <Col md={12} className="productview">
            {ProductView()}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CategoryStorePage;
