import Carousel from "react-bootstrap/Carousel";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
} from "react-bootstrap";
import Wns from "../assets/Feedbacks/WNSbg.png";
import CT from "../assets/Feedbacks/cyberTech.jpg";
import EH from "../assets/Feedbacks/Endress.jpg";
import Godrej from "../assets/Feedbacks/Godrejbg.png";
import Niva from "../assets/Feedbacks/nivabg.png";
import SRF from "../assets/Feedbacks/ShreeRamFinancebg.png";
import LQ from "../assets/Feedbacks/Qoutes.jpg";
import FQ from "../assets/Feedbacks/quotes.jpg";
function IndividualIntervalsExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <Card>
          <CardHeader
            className="text-center"
            style={{
              backgroundColor: "#3d63ae",
              color: "white",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <h1>⭐⭐⭐⭐⭐</h1>
            <b>
              <h4>Ronak Bhatia / WNS Global Services (P) Ltd</h4>
            </b>
          </CardHeader>
          <CardBody
            style={{
              height: "300px",
              width: "100%",
              color: "black",
            }}
            id="carouselItem"
          >
            <Container>
              <p
                className="text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span>
                  <img src={FQ} style={{ width: "40px" }} alt="" />
                </span>{" "}
                Trade Movers has been a fantastic organization to work with.
                They go the extra mile to ensure the Quality of goods is sent to
                Pan India in the time frame mentioned. I have worked with them
                multiple times and looking forward to many more collaborations
                with them. Thanks
                <span>
                  <img src={LQ} style={{ width: "40px" }} alt="" />
                </span>{" "}
              </p>
              <div className="text-center">
                <img style={{ width: "200px" }} src={Wns} alt="img not found" />
              </div>
            </Container>
          </CardBody>
        </Card>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Card>
          <CardHeader
            className="text-center"
            style={{ backgroundColor: "#3d63ae", color: "white" }}
          >
            <h1>⭐⭐⭐⭐⭐</h1>
            <b>
              <h4 style={{ fontFamily: "Poppins, sans-serif" }}>
                Minjal Raval / CyberTech Systems and Software Limited
              </h4>
            </b>
          </CardHeader>
          <CardBody
            style={{
              height: "300px",
              width: "100%",
              color: "black",
            }}
            id="carouselItem"
          >
            <Container>
              <p
                className="text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {" "}
                <span>
                  <img src={FQ} style={{ width: "40px" }} alt="" />
                </span>{" "}
                We are delighted to provide a testimonial for Trade Movers. Our
                experience with Trade Movers has been exceptional. Our
                experience with Trade Movers was exceptional. The quality of our
                Corporate Welcome kit surpassed expectations.The team was
                professional, responsive, and attentive throughout. Their
                customer service was commendable. We highly recommend Trade
                Movers for quality corporate items.
                <span>
                  <img src={LQ} style={{ width: "40px" }} alt="" />
                </span>
              </p>

              <div className="text-center">
                <img style={{ width: "200px" }} src={CT} alt="img not found" />
              </div>
            </Container>
          </CardBody>
        </Card>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Card>
          <CardHeader
            className="text-center"
            style={{ backgroundColor: "#3d63ae", color: "white" }}
          >
            <h1>⭐⭐⭐⭐⭐</h1>
            <b>
              <h4 style={{ fontFamily: "Poppins, sans-serif" }}>
                Jatin Malhotra / Niva Bupa Health Insurance Company Limited
              </h4>
            </b>
          </CardHeader>
          <CardBody
            style={{
              height: "300px",
              width: "100%",
              color: "black",
            }}
            id="carouselItem"
          >
            <Container>
              <p
                className="text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {" "}
                <span>
                  <img src={FQ} style={{ width: "40px" }} alt="" />
                </span>{" "}
                You are too cool personality with good business ethics .keep up
                the good work.{" "}
                <span>
                  <img src={LQ} style={{ width: "40px" }} alt="" />
                </span>
              </p>

              <div className="text-center">
                <img
                  style={{ width: "200px" }}
                  src={Niva}
                  alt="img not found"
                />
              </div>
            </Container>
          </CardBody>
        </Card>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Card>
          <CardHeader
            className="text-center"
            style={{ backgroundColor: "#3d63ae", color: "white" }}
          >
            <h1>⭐⭐⭐⭐⭐</h1>
            <b>
              <h4 style={{ fontFamily: "Poppins, sans-serif" }}>
                Bipin Shringarpure / Corporate Procurement Department / Godrej &
                Boyce Mfg. Co. Ltd.
              </h4>
            </b>
          </CardHeader>
          <CardBody
            style={{
              height: "300px",
              width: "100%",
              color: "black",
            }}
            id="carouselItem"
          >
            <Container>
              <p
                className="text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span>
                  <img src={FQ} style={{ width: "40px" }} alt="" />
                </span>{" "}
                Latest Gifting Products with Variety , Delivery Schedules have
                always been maintained,
                <br />
                Everything From Response to Quality to Service is commendable…
                <span>
                  <img src={LQ} style={{ width: "40px" }} alt="" />
                </span>{" "}
              </p>
              <div className="text-center">
                <img
                  style={{ width: "200px" }}
                  src={Godrej}
                  alt="img not found"
                />
              </div>
            </Container>
          </CardBody>
        </Card>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Card>
          <CardHeader
            className="text-center"
            style={{ backgroundColor: "#3d63ae", color: "white" }}
          >
            <h1>⭐⭐⭐⭐⭐</h1>
            <b>
              <h4 style={{ fontFamily: "Poppins, sans-serif" }}>
                {" "}
                Shri Ram Amit
              </h4>
            </b>
          </CardHeader>
          <CardBody
            style={{
              height: "300px",
              width: "100%",
              color: "black",
            }}
            id="carouselItem"
          >
            <Container>
              <p
                className="text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span>
                  <img src={FQ} style={{ width: "40px" }} alt="" />
                </span>{" "}
                From the outset, Trade Movers grasped our brand and vision,
                tailoring a solution that aligned perfectly with our objectives.
                They listened attentively, crafting a customized merchandise
                plan. Their attention to detail, high-quality materials, and
                timely delivery surpassed expectations.
                <span>
                  <img src={LQ} style={{ width: "40px" }} alt="" />
                </span>
              </p>

              <div className="text-center">
                <img style={{ width: "200px" }} src={SRF} alt="img not found" />
              </div>
            </Container>
          </CardBody>
        </Card>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Card>
          <CardHeader
            className="text-center"
            style={{ backgroundColor: "#3d63ae", color: "white" }}
          >
            <h1>⭐⭐⭐⭐⭐</h1>
            <b>
              <h4 style={{ fontFamily: "Poppins, sans-serif" }}>
                Endress + Hauser
              </h4>
            </b>
          </CardHeader>
          <CardBody
            style={{
              height: "300px",
              width: "100%",
              color: "black",
            }}
            id="carouselItem"
          >
            <Container>
              <p
                className="text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span>
                  <img src={FQ} style={{ width: "40px" }} alt="" />
                </span>{" "}
                The Trade gifting company exceeded my expectations with their
                exceptional service and unique gift selection. Their attention
                to detail and prompt delivery made the entire experience
                seamless. I highly recommend them to anyone looking to find the
                perfect gift for any occasion. Mr. Poonam J. Poladia - Asst.
                Director Marcom -Endress+Hauser India Pvt. Ltd.
                <span>
                  <img src={LQ} style={{ width: "40px" }} alt="" />
                </span>
              </p>
              <div className="text-center">
                <img style={{ width: "200px" }} src={EH} alt="img not found" />
              </div>
            </Container>
          </CardBody>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
