import React, { useEffect, useState } from "react";
import { GetCategory } from "../../Services/category.service";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import circleImg from "../../assets/icons/Linkdin.png";
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
          textAlign: "center",
          backgroundColor: "#3d65b0",
          borderRadius: "20%",
          margin: "15px 0 0 0 ",
          alignItems: "center",
        }}
      >
        <CardBody>
          <img
            src={cat.coverImage}
            alt="Circle"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />
          <h5
            style={{
              fontSize: "14px",
            }}
            className="text-white cat"
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
    GetCategory()
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
          <div style={{ backgroundColor: "white" }}>
            <h1
              className="text-center catname"
              style={{
                fontFamily: "Poppins, sans-serif",
                marginTop: "10px",
                fontSize: "50px",
                color: "black",
                backgroundColor: "white",
              }}
            >
              <b>Our Category</b>
            </h1>
          </div>
          <Row
            className="justify-content-md-center"
            style={{ backgroundColor: "white" }}
          >
            {categories.content.map((cat) => (
              <Col
                md="auto"
                sm="auto"
                xs={6}
                as={Link}
                to={`/store/${cat.categoryId}/${cat.title}`}
                key={cat.categoryId}
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
