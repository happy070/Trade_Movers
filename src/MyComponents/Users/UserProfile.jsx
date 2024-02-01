import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import defaultProfile from "../../assets/profile/defaultProfile.png";
import { BASE_URL } from "../../Services/helper.service";
const UserProfile = ({ user = null }) => {
  const imageView = {
    maxWidth: "200px",
    maxHeight: "200px",
    borderRadius: "50%",
  };
  return (
    <>
      {user && (
        <Container fluid>
          <Row>
            <Col sm={{ span: 6, offset: 3 }}>
              <Card className="shadow m-3" style={{ borderRadius: 25 }}>
                <CardBody>
                  <div className="text-center">
                    <img
                      style={
                        user.imageName
                          ? BASE_URL + "/users/image" + user.userId
                          : imageView
                      }
                      src={defaultProfile}
                      alt="Image not Found"
                    />
                    <h2 style={{ color: "#143cde" }}>{user.name}</h2>
                  </div>
                  <Table
                    className="text-center"
                    responsive
                    striped="columns"
                    bordered
                    hover
                    size="md"
                  >
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <td>Role</td>
                        <td>{user.roles.map((role) => role.roleName)}</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                      </tr>
                      <tr>
                        <td>About</td>
                        <td>{user.about}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Container className="text-center mt-xs-5">
                    <Button size="lg" className="me-2" variant="success">
                      Update
                    </Button>
                    <Button size="lg" variant="warning">
                      Clear
                    </Button>
                  </Container>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default UserProfile;
