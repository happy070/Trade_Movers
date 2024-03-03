import React, { useEffect, useState } from "react";
import { GetCategory } from "../../Services/category.service";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SelectedCategoryView = () => {
  const [categories, setCategories] = useState({
    content: [],
  });
  const [selectedCategory, setSelectedCategory] = useState("All Products");

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

  const handleCategoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    console.log("selected Category" + selectedCategory);
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

  const GetCategoryView = () => {
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
            <Col xs={12} md={12}>
              <ListGroup>
                <ListGroupItem
                  as={Link}
                  to={`/`}
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
                {categories.content.map((cat) => (
                  <ListGroupItem
                    as={Link}
                    to={`/store/${cat.categoryId}/${cat.title}`}
                    className="category-names"
                    key={cat.categoryId}
                    // to={`/store/${cat.categoryId}/${cat.title}`}
                    onClick={() => handleCategoryClick(cat.title)}
                    style={
                      selectedCategory === cat.title
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
  return categories && GetCategoryView();
};

export default SelectedCategoryView;
