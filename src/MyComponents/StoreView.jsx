// import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../src/index.css";
// import { getAllProducts } from "../Services/product.service";
// import { toast } from "react-toastify";

// import SingleCardItem from "./Users/SingleCardItem";
import SelectedCategoryView from "../pages/users/SelectedCategoryView";
const StoreView = () => {
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   loadProducts(0, 1000, "addedDate", "desc");
  // }, []);

  // const loadProducts = (pageNumber, pageSize, sortBy, sortDir) => {
  //   getAllProducts(pageNumber, pageSize, sortBy, sortDir)
  //     .then((data) => {
  //       console.log(data);
  //       setProduct({ ...data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error("Error In Loading products");
  //     });
  // };
  // const ProductView = () => {
  //   return (
  //     product && (
  //       <>
  //         <Row>
  //           {product.content.map((p) => (
  //             <Col key={p.productId} md={3}>
  //               <SingleCardItem product={p} />
  //             </Col>
  //           ))}
  //         </Row>
  //       </>
  //     )
  //   );
  // };
  return (
    <>
      <Container
        fluid
        className="px-2 pt-2"
        style={{ backgroundColor: "white" }}
      >
        <Row>
          <Col
            md={12}
            lg={12}
            xs={12}
            style={{
              paddingTop: "20px",
              borderRight: "0px solid #ccc",
              backgroundColor: "white",
            }}
            className=" p-3 mb-5 rounded"
          >
            <SelectedCategoryView />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default StoreView;
