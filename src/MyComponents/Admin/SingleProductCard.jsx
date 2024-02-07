import React from "react";
import { Button } from "react-bootstrap";

const SingleProductCard = ({ product, index }) => {
  const formatDate = (time) => {
    return new Date(time).toLocaleDateString();
  };
  return (
    <tr>
      <td>{index++}</td>
      <td>{product.category.title}</td>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{product.discountedPrice}</td>
      <td>{product.live ? "Live" : "Not Live"}</td>
      <td>{product.stock ? "yes" : "No"}</td>
      <td>{formatDate(product.addedDate)}</td>
      <td>
        <Button size="sm" variant="danger" className="me-1">
          Delete
        </Button>

        <Button size="sm" variant="warning" className="me-1">
          view
        </Button>

        <Button size="sm" variant="success">
          Update
        </Button>
      </td>
    </tr>
  );
};

export default SingleProductCard;
