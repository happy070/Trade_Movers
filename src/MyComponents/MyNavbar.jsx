import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from "../assets/logo-no-background.png";
import NavDropdown from "react-bootstrap/NavDropdown";
function MyNavbar() {
  const MyStyle = {
    backgroundColor: "#9323BA",
  };
  return (
    <Navbar expand="lg" style={MyStyle}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={img}
            width="170"
            height="65"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link style={{ color: "white" }} href="#action1">
              Login
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#action2">
              SignUp
            </Nav.Link>
            <NavDropdown
              style={{ color: "white" }}
              title="Click-Me"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">
                24x7 Customer Support
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Advertise</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Download App</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
