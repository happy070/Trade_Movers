import React from "react";
import MyNavbar from "./MyNavbar";
import { Card, CardBody, Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

const Gallery = () => {
  const imagevar = [
    "https://i.postimg.cc/RVDBLgQ5/Our-work-1.png",
    " https://i.postimg.cc/CLt3qzSw/Our-work-10.png",
    " https://i.postimg.cc/76xdkzMn/Our-work-11.png",
    " https://i.postimg.cc/vZVpLbZf/Our-work-12.png",
    " https://i.postimg.cc/br5BkBXm/Our-work-13.png",
    " https://i.postimg.cc/g0b1gQx5/Our-work-14.png",
    " https://i.postimg.cc/MG0NN5RG/Our-work-15.png",
    " https://i.postimg.cc/fLBFTb8n/Our-work-16.png",
    " https://i.postimg.cc/9fTCMy93/Our-work-2.png",
    " https://i.postimg.cc/MHpCyBnp/Our-work-3.png",
    " https://i.postimg.cc/zvd1Mjsh/Our-work-4.png",
    " https://i.postimg.cc/sf5Q8ZHN/Our-work-5.png",
    " https://i.postimg.cc/ZRHkBHKQ/Our-work-6.png",
    " https://i.postimg.cc/yxxGJzGJ/Our-work-7.png",
    " https://i.postimg.cc/13d349YF/Our-work-8.png",
    " https://i.postimg.cc/fLDnRpZX/Our-work-9.png",
  ];

  return (
    <>
      <MyNavbar />
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ backgroundColor: "white", height: "80px" }}
        style={{ backgroundColor: "white", height: "80px" }}
      >
        <h1
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            marginTop: "10px",
            fontSize: "50px",
            color: "black",
            fontFamily: "Poppins, sans-serif",
            marginTop: "10px",
            fontSize: "50px",
            color: "black",
          }}
          className="baseName"
        >
          <b>Our Work</b>
        </h1>
          <b>Our Work</b>
        </h1>
      </div>
      <Container fluid>
        <Row className="justify-content-center">
          {imagevar.map(
            (imageUrl, index) =>
              index % 4 === 0 && (
                <Row key={index / 4} className="justify-content-center">
                  {imagevar.slice(index, index + 4).map((image, idx) => (
                    <Col
                      key={idx}
                      xs={12}
                      sm={6}
                      md={3}
                      className="d-flex justify-content-center"
                    >
                      <Card
                        className="text-center"
                        style={{
                          marginBottom: "20px",
                          width: "250px",
                          height: "300px",
                        }}
                      >
                        <CardBody>
                          <img
                            src={image}
                            alt={`Image ${index + idx}`}
                            style={{
                              marginBottom: "10px",
                              width: "95%",
                            }}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Gallery;
