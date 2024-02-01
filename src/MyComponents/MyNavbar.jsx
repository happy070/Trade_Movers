import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/TradeMoversLogo.png";
import { useContext } from "react";
import UserContext from "../Context/user.context";
import { toast } from "react-toastify";
function MyNavbar() {
  const redirect = useNavigate();
  const userContext = useContext(UserContext);
  const MyStyle = {
    backgroundColor: "white",
  };
  function LogOut() {
    // userContext.setIsLogin(false);
    // userContext.setUserData(null);
    userContext.logout();
    toast.success("LogOut Successfully");
    redirect("/");
  }
  return (
    <Navbar expand="lg" style={MyStyle}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" href="#home">
          <img
            src={Logo}
            width="175"
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
            {userContext.isLogin ? (
              <>
                {userContext.isAdminLogin && (
                  <>
                    {" "}
                    <Nav.Link
                      as={NavLink}
                      to="/Admin/home"
                      style={{ color: "black" }}
                      href="#action1"
                    >
                      Admin-DashBoard
                    </Nav.Link>{" "}
                  </>
                )}

                <Nav.Link
                  as={NavLink}
                  to="/users/profile"
                  style={{ color: "black" }}
                  href="#action1"
                >
                  {userContext.userData.user?.name}
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/Users/orders"
                  style={{ color: "black" }}
                  href="#action1"
                >
                  Orders
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/"
                  style={{ color: "black" }}
                  href="#action2"
                  onClick={LogOut}
                >
                  LogOut
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/LoginPage"
                  style={{ color: "black" }}
                  href="#action1"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/SignUpPage"
                  style={{ color: "black" }}
                  href="#action2"
                >
                  SignUp
                </Nav.Link>
              </>
            )}
            <Nav.Link
              as={NavLink}
              to="/AboutPage"
              style={{ color: "black" }}
              href="#action2"
            >
              AboutUs
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/ContactUsPage"
              style={{ color: "black" }}
              href="#action2"
            >
              ContactUs
            </Nav.Link>
            <NavDropdown
              style={{ color: "black" }}
              title="Product Categories"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Smart-Phones</NavDropdown.Item>
              <NavDropdown.Item href="#action4">TVs</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Kitchenware</NavDropdown.Item>
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
              style={{ border: "1px solid #000" }}
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
