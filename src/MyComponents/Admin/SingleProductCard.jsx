import React from "react";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteProduct } from "../../Services/product.service";
import { toast } from "react-toastify";
const SingleProductCard = ({
  product,
  index,
  updateProductList,
  openProductViewModal,
}) => {
  const formatDate = (time) => {
    return new Date(time).toLocaleDateString();
  };
  const getproduct = () => {
    if (product.live && product.stock) {
      return "table-success";
    } else if (!product.live) {
      return "table-danger";
    } else if (!product.stock) {
      return "table-warning";
    } else {
    }
  };

  const deleteProductItem = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product.productId)
          .then((data) => {
            console.log(data);
            updateProductList(productId);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
            toast.error("Error in Deleting product");
          });
      }
    });
  };

  return (
    <tr className={getproduct()}>
      <td className="px-3 small">{index + 1}</td>
      <td className="px-3 small">{product.category.title}</td>
      <td className="px-3 small">{product.title}</td>
      <td className="px-3 small">{product.price}</td>
      <td className="px-3 small">{product.discountedPrice}</td>
      <td className="px-3 small">{product.live ? "Live" : "Not Live"}</td>
      <td className="px-3 small">{product.stock ? "yes" : "No"}</td>
      <td className="px-3 small">{formatDate(product.addedDate)}</td>
      <td className="px-3 small d-flex">
        <Button
          size="sm"
          variant="danger"
          className="me-1"
          onClick={(event) => deleteProductItem(product.productId)}
        >
          <MdDelete />
        </Button>

        <Button
          size="sm"
          variant="warning"
          className="me-1"
          onClick={(event) => openProductViewModal(product)}
        >
          <FaEye />
        </Button>
      </td>
    </tr>
  );
};

export default SingleProductCard;
