import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";

const CategoryView = ({ category, deleteCat }) => {
  const deleteCategory = (categoryId) => {
    deleteCat(categoryId);
  };

  return (
    <>
      <Container className="mt-2">
        <div>
          <Card style={{ minHeight: "100px", justifyContent: "center" }}>
            <CardBody>
              <Row>
                {/* <Col xs={4} md={2} className=" text-center mb-2 mb-md-0">
                  {console.log(category.coverImage)}
                  <img
                    src={category.coverImage}
                    alt="image not Found"
                    style={{
                      height: "80px",
                      width: "auto",
                      borderRadius: "10px",
                    }}
                  />
                </Col> */}
                <Col xs={8} md={10}>
                  <h2 className="mb-2 mb-md-0">{category.title}</h2>
                  <h6 className="mb-0">{category.description}</h6>
                  <div className="mt-2">
                    {/* <Button variant="primary" className="me-2" size="sm">
                      View
                    </Button> */}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={(event) => deleteCategory(category.categoryId)}
                    >
                      Delete
                    </Button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default CategoryView;
