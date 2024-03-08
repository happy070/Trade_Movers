import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/TradeMoverLogoWhite.png";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/user.context";
import { toast } from "react-toastify";
import { getCategories } from "../Services/category.service";
function MyNavbar() {
  const redirect = useNavigate();
  const userContext = useContext(UserContext);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    loadCategories(0, 10000);
  }, []);

  const loadCategories = (pageNumber, pageSize) => {
    getCategories(pageNumber, pageSize)
      .then((data) => {
        console.log(data);
        setCategories({ ...data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const MyStyle = {
    backgroundColor: "#3d63ae",
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
            width="220"
            height="60"
            className="d-inline-block align-top"
            style={{ marginLeft: 20 }}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
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
                      style={{
                        color: "white",
                        fontFamily: "Poppins, sans-serif",
                      }}
                      href="#action1"
                    >
                      Admin-DashBoard
                    </Nav.Link>{" "}
                  </>
                )}

                <Nav.Link
                  as={NavLink}
                  to="/users/profile"
                  style={{ color: "white" }}
                  href="#action1"
                >
                  {userContext.userData.user?.name}
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/"
                  style={{ color: "white", fontFamily: "Poppins, sans-serif" }}
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
                  to="/"
                  style={{ color: "white", fontFamily: "Poppins, sans-serif" }}
                  href="#action1"
                >
                  Home
                </Nav.Link>
                {/* <Nav.Link
                  as={NavLink}
                  to="/SignUpPage"
                  style={{ color: "black", fontFamily: "Poppins, sans-serif" }}
                  href="#action2"
                >
                  SignUp
                </Nav.Link> */}
              </>
            )}
            <Nav.Link
              as={NavLink}
              to="/AboutPage"
              style={{ color: "white", fontFamily: "Poppins, sans-serif" }}
              href="#action2"
            >
              AboutUs
            </Nav.Link>
            <NavDropdown
              style={{ color: "white", fontFamily: "Poppins, sans-serif" }}
              title={<span style={{ color: "white" }}>Product Categories</span>}
              id="navbarScrollingDropdown"
            >
              {categories &&
                categories.content.map((cat, index) => (
                  <NavDropdown.Item href="#action3" key={index}>
                    {cat.title}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ border: "1px solid #000" }}
            />
            <Button style={{ backgroundColor: "#05215e", color: "white" }}>
              Search
            </Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
