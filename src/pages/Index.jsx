import MyNavbar from "../MyComponents/MyNavbar";
import watches from "../assets/Carousels/ANALOGWatch.jpg";
import Luggage from "../assets/Carousels/BRANDEDLUGGAGE.jpg";
import BTshirt from "../assets/Carousels/Tshirt.jpg";
import Drink from "../assets/Carousels/drinkware.jpg";
import EcoFriend from "../assets/Carousels/EcoFriendly.jpg";
import Electronics from "../assets/Carousels/Electronics.jpg";
import Vouchers from "../assets/Carousels/GiftVouchers.jpg";
import KitchenItems from "../assets/Carousels/Kitchen.jpg";
import OfficeEssentail from "../assets/Carousels/OfficeEssentials.jpg";
import Onboarding from "../assets/Carousels/Onboarding.jpg";
import giftbox from "../assets/icons/gift.png";
import { Col, Container, Row } from "react-bootstrap";
import "../../src/index.css";
import CategoryView from "../MyComponents/CategoryView";
import Footer from "../MyComponents/Footer.jsx";
function Index() {
  return (
    <>
      <MyNavbar />
      <div>
        <Container
          fluid
          className="d-flex justify-content-center align-items-center text-center"
        >
          <div>
            <h2 style={{ fontFamily: "Sixtyfour, sans-serif" }}>
              Welcome to Trade Movers...
            </h2>
            <h6 style={{ fontFamily: "Poppins, sans-serif" }}>
              Promotional & Corporate Gifting
              <span>
                <img
                  src={giftbox}
                  style={{ height: 40, marginTop: -5 }}
                  alt="image not Found"
                />
              </span>
            </h6>
          </div>
        </Container>
        <div className="overflow-auto">
          <div className="d-flex scroll-container">
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={watches}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Luggage}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={BTshirt}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Onboarding}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Vouchers}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={OfficeEssentail}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={KitchenItems}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Drink}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={EcoFriend}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={Electronics}
              text="First slide"
            />
          </div>
        </div>

        <Container fluid className="px-5 pt-5">
          <Row>
            <Col
              md={12}
              lg={2}
              style={{
                paddingTop: "20px",
                borderRight: "1px solid #ccc",
                backgroundColor: "#f8f9fa",
              }}
            >
              <CategoryView />
            </Col>
            <Col md={10}>
              <h3>Product view</h3>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
export default Index;
