import React, { useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "../../index.css";
import { Link, NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlineAddBox } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { PiFlagBannerBold } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
const AdminMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Add Category");

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
  return (
    <>
      <h5
        className="text-center category"
        style={{
          fontFamily: "poppinsr, sans-serif",
          fontSize: "17px",
          boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        CATEGORIES
      </h5>
      <Row style={{ backgroundColor: "#f2f5f7" }}>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Add Category")}
              style={
                selectedCategory === "Add Category"
                  ? selectedStyle
                  : commonStyle
              }
              as={NavLink}
              to="/Admin/add-category"
            >
              <strong className="icon">
                <TbCategoryPlus size={20} />
                <span className="ms-1">Add Category</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#f2f5f7" }}>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("View Category")}
              style={
                selectedCategory === "View Category"
                  ? selectedStyle
                  : commonStyle
              }
              as={NavLink}
              to="/Admin/view-category"
            >
              <strong className="icon">
                <BiCategory size={20} />
                <span className="ms-1">view Category</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Add Product")}
              style={
                selectedCategory === "Add Product" ? selectedStyle : commonStyle
              }
              as={NavLink}
              to="/Admin/add-product"
            >
              <strong className="icon">
                <MdOutlineAddBox size={20} />
                <span className="ms-1">Add product</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#f2f5f7" }}>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("View Product")}
              style={
                selectedCategory === "View Product"
                  ? selectedStyle
                  : commonStyle
              }
              as={NavLink}
              to="/Admin/view-Product"
            >
              <strong className="icon">
                <FaEye size={20} />
                <span className="ms-1">View Product</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              onClick={() => handleCategoryClick("Quick Enquiry")}
              style={
                selectedCategory === "Quick Enquiry"
                  ? selectedStyle
                  : commonStyle
              }
              as={NavLink}
              to="/Admin/quick-enquiry"
            >
              <strong className="icon">
                <FaAngellist />
                <span className="ms-1">Quick Enquiry </span>&nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#f2f5f7" }}>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              className="text-center"
              onClick={() => handleCategoryClick("Orders")}
              style={
                selectedCategory === "Orders" ? selectedStyle : commonStyle
              }
              as={Link}
              to="/Admin/orders"
            >
              <strong className="icon">
                <FaAngellist />
                <span className="ms-1">Orders</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              className="text-center"
              onClick={() => handleCategoryClick("Add-Carousel")}
              style={
                selectedCategory === "Add-Carousel"
                  ? selectedStyle
                  : commonStyle
              }
              as={Link}
              to="/Admin/add-carousel"
            >
              <strong className="icon">
                <PiFlagBannerBold />
                <span className="ms-1">Add-Carousel</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#f2f5f7" }}>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              className="text-center"
              onClick={() => handleCategoryClick("show-Carousel")}
              style={
                selectedCategory === "show-Carousel"
                  ? selectedStyle
                  : commonStyle
              }
              as={Link}
              to="/Admin/show-carousel"
            >
              <strong className="icon">
                <PiFlagBannerBold />
                <span className="ms-1">Show-Carousel</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              className="text-center"
              onClick={() => handleCategoryClick("Add-Trending")}
              style={
                selectedCategory === "Add-Trending"
                  ? selectedStyle
                  : commonStyle
              }
              as={Link}
              to="/Admin/add-trending"
            >
              <strong className="icon">
                <FaArrowTrendUp />
                <span className="ms-1">Add-Trending</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              className="text-center"
              onClick={() => handleCategoryClick("show-Trending")}
              style={
                selectedCategory === "show-Trending"
                  ? selectedStyle
                  : commonStyle
              }
              as={Link}
              to="/Admin/show-trending"
            >
              <strong className="icon">
                <FaArrowTrendUp />
                <span className="ms-1">Show-Trending</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        {/* <Col xs={6} md={12}>
          <ListGroup>
            <ListGroupItem
              className="text-center"
              onClick={() => handleCategoryClick("Logout")}
              style={
                selectedCategory === "Logout" ? selectedStyle : commonStyle
              }
              as={Link}
              to="/"
            >
              <strong className="icon">
                <TbLogout2 size={20} />
                <span className="ms-1">Logout</span> &nbsp;
              </strong>
            </ListGroupItem>
          </ListGroup>
        </Col> */}
      </Row>
    </>
  );
};
export default AdminMenu;
