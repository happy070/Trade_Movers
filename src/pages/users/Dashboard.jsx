import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserContext from "../../Context/user.context";
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
function Dashboard() {
  const userContext = React.useContext(UserContext);

  const DashBoardView = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };
  const notLoggedIn = () => {
    return (
      <>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card className="text-center border-0 shadow mt-5">
                <CardBody>
                  <h2>You are not logged in !!!</h2>
                  <h5>Kindly Login.</h5>
                  <Button as={NavLink} to={"/LoginPage"}>
                    login
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  return <>{userContext.isLogin ? DashBoardView() : notLoggedIn()}</>;
}
export default Dashboard;
