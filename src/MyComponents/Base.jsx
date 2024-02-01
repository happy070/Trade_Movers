import { Container, Button } from "react-bootstrap";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Base = ({
  title = "Title Page",
  discription = "",
  ButtonEnabled = false,
  ButtonText = "Shop now",
  ButtonType = "primary",
  children,
}) => {
  const MyStyle = {
    backgroundColor: "#2347d9",
    color: "white",
    height: "140px",
    fontFamily: "Sixtyfour, sans-serif",
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
