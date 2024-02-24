import React from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";

const Testimonials = () => {
  return (
    <Container>
      <Row style={{ background: "#3d63ae" }}>
        <Col md={4}>
          <Card style={{ borderRadius: "50px", height: 400 }}>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia obcaecati quidem nemo nostrum? Voluptate, molestias
                rerum consequatur itaque cumque ad.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ borderRadius: "50px", height: 400 }}>
            <CardBody>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci nesciunt debitis cumque soluta pariatur ea aut suscipit
                vel incidunt officia?
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ borderRadius: "50px", height: 400 }}>
            <CardBody>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                hic quasi ipsam eos, quas facilis laboriosam suscipit ex fuga
                excepturi!
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
