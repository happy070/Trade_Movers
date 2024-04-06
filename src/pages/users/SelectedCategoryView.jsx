import React, { useEffect, useState } from "react";
import { getCategories } from "../../Services/category.service";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../src/index.css";
const SelectedCategoryView = () => {
  const [categories, setCategories] = useState({
    content: [],
  });

  const CircleCard = ({ cat }) => {
    return (
      <Card
        style={{
          width: "auto",
          backgroundColor: "white",
          borderRadius: "20%",
          margin: "15px 0 0 0 ",
          border: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardBody className="d-flex flex-column align-items-center justify-content-center">
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "#3d63ae",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={cat.coverImage}
              alt="Circle"
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </div>
          <h5
            style={{
              fontSize: "20px",
              color: "black",
              textDecoration: "none !important",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="cat"
          >
            {cat.title}
          </h5>
        </CardBody>
      </Card>
    );
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories()
      .then((data) => {
        console.log("hello");
        console.log("Getting all category ", data);
        setCategories(data);
      })
      .catch((error) => {
        console.log("hiii");
        console.error(error);
      });
  };

  const GetCategoryView = () => {
    return (
      categories && (
        <>
          <Row
            className="justify-content-md-center"
            style={{ backgroundColor: "white" }}
          >
            <div
              className="d-flex justify-content-center align-items-center text-center"
              style={{ backgroundColor: "white", height: "80px" }}
            >
              <h1
                style={{
                  fontFamily: "Poppins, sans-serif",
                  marginTop: "10px",
                  fontSize: "50px",
                  color: "black",
                }}
                className="baseName"
              >
                <b>Our Category</b>
              </h1>
            </div>
            {categories.content.map((cat) => (
              <Col
                md="auto"
                sm="auto"
                xs={6}
                as={Link}
                to={`/store/${cat.categoryId}/${cat.title}`}
                key={cat.categoryId}
                style={{ textDecoration: "none" }}
              >
                <CircleCard cat={cat} />
              </Col>
            ))}
          </Row>
        </>
      )
    );
  };
  return categories && GetCategoryView();
};

export default SelectedCategoryView;
