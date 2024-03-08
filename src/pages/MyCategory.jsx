import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import circleImg from "../assets/icons/Linkdin.png"; // Replace with your image path
import { GetCategory } from "../Services/category.service";
import { Link } from "react-router-dom";

const MyCategory = () => {
  const [categories, setCategories] = useState({
    content: [],
  });

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

  return (
    <>
      <div>
        <h1 className="text-center">Our Category</h1>
      </div>
      <Row className="justify-content-md-center">
        {categories.content.map((cat) => (
          <Col
            md="auto"
            sm="auto"
            xs="auto"
            as={Link}
            to={`/store/${cat.categoryId}/${cat.title}`}
            key={cat.categoryId}
          >
            <CircleCard cat={cat} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const CircleCard = ({ cat }) => {
  return (
    <Card
      style={{
        width: "150px",
        textAlign: "center",
        backgroundColor: "#3d65b0",
        borderRadius: "20%",
        margin: "15px 0 0 0 ",
        alignItems: "center",
      }}
    >
      <CardBody>
        <img
          src={circleImg}
          alt="Circle"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
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

export default MyCategory;
