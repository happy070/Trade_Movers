import React, { useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const CategoryView = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

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
    backgroundColor: "#347aeb",
    color: "white",
  };
  return (
    <>
      <h5 className="text-center category">Categories</h5>
      <Row>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Gadgets")}
              style={
                selectedCategory === "Gadgets" ? selectedStyle : commonStyle
              }
            >
              <strong className="icon">Gadgets &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Bags")}
              style={selectedCategory === "Bags" ? selectedStyle : commonStyle}
            >
              <strong className="icon">Bags &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Garments")}
              style={
                selectedCategory === "Garments" ? selectedStyle : commonStyle
              }
            >
              <strong className="icon">Garments &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Office Essentials")}
              style={
                selectedCategory === "Office Essentials"
                  ? selectedStyle
                  : commonStyle
              }
            >
              <strong className="icon">Office Essentials &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Home Appliances")}
              style={
                selectedCategory === "Home Appliances"
                  ? selectedStyle
                  : commonStyle
              }
            >
              <strong className="icon">Home Appliances &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Stationary")}
              style={
                selectedCategory === "Stationary" ? selectedStyle : commonStyle
              }
            >
              <strong className="icon">Stationary &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Trophies & Rewards")}
              style={
                selectedCategory === "Trophies & Rewards"
                  ? selectedStyle
                  : commonStyle
              }
            >
              <strong className="icon">Trophies & Rewards &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Sweets & Chocolate")}
              style={
                selectedCategory === "Sweets & Chocolate"
                  ? selectedStyle
                  : commonStyle
              }
            >
              <strong className="icon">Sweets & Chocolate &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Kitchen Essentials")}
              style={
                selectedCategory === "Kitchen Essentials"
                  ? selectedStyle
                  : commonStyle
              }
            >
              <strong className="icon">Kitchen Essentials &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Employee OnBoarding")}
              style={
                selectedCategory === "Employee OnBoarding"
                  ? selectedStyle
                  : commonStyle
              }
            >
              <strong className="icon">Employee OnBoarding &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Drinkware")}
              style={
                selectedCategory === "Drinkware" ? selectedStyle : commonStyle
              }
            >
              <strong className="icon">Drinkware &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Analog Watches")}
              style={
                selectedCategory === "Analog Watches"
                  ? selectedStyle
                  : commonStyle
              }
            >
              <strong className="icon">Analog Watches &nbsp;</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};
export default CategoryView;
