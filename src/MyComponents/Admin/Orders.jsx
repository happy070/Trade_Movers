import React, { useEffect, useState } from "react";
import { Card, CardBody, Container } from "react-bootstrap";
import { FetchAllOrders } from "../../Services/user.service";

const Orders = () => {
  const [orders, setOrders] = useState([]); // State to store orders
  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    FetchAllOrders()
      .then((response) => {
        console.log("Response from order Api", response);
        setOrders(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h3>Hurry Orders</h3>
      <div>
        <Container style={{ overflowY: "scroll", height: "710px" }}>
          {orders.map((order, index) => (
            <Card className="mb-2">
              <CardBody key={index}>
                <div style={{ display: "flex" }}>
                  <h6>Name :</h6>
                  <p>&nbsp;{order.name}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Email :</h6>
                  <p>&nbsp;{order.email}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Mobile :</h6>
                  <p>&nbsp;{order.mobile}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>City :</h6>
                  <p>&nbsp;{order.city}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Company Name :</h6>
                  <p>&nbsp;{order.companyname}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Product Request Name :</h6>
                  <p>&nbsp;{order.productrequest}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Quantity :</h6>
                  <p>&nbsp;{order.quantity}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Orders;
