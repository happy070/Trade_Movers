import { Card, CardBody, Container } from "react-bootstrap";
import { GetOrder } from "../../Services/order.service";
import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]); // State to store orders

  useEffect(() => {
    // Fetch orders when component mounts
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    GetOrder()
      .then((response) => {
        console.log("Response from order APi ", response);
        setOrders(response);
      })
      .catch((error) => {
        console.log("Error fetching orders:", error);
      });
  };

  return (
    <>
      <Container style={{ overflowY: "scroll", height: "500px" }}>
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
                <h6>Message :</h6>
                <p>&nbsp;{order.message}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </Container>
    </>
  );
}
export default Orders;
