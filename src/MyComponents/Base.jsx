import { Container, Button } from "react-bootstrap";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Base = ({
  title = "Title Page",
  discription = "Welcome to the dynamic page",
  ButtonEnabled = false,
  ButtonText = "Shop now",
  ButtonType = "primary",
  children,
}) => {
  const MyStyle = {
    backgroundColor: "#9323BA",
    color: "white",
    height: "150px",
  };
  return (
    <div>
      <Container
        style={MyStyle}
        fluid
        className="d-flex justify-content-center align-items-center text-center"
      >
        <div>
          <h3>{title}</h3>
          <p>{discription}</p>
          {ButtonEnabled && (
            <Button
              as={NavLink}
              to={"/"}
              style={{ marginBottom: 10 }}
              variant={ButtonType}
            >
              {ButtonText}
            </Button>
          )}
        </div>
      </Container>
      {children}
      <Footer />
    </div>
  );
};
export default Base;
