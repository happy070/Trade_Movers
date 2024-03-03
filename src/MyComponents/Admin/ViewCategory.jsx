import React, { useEffect, useState } from "react";
import CategoryView from "./CategoryView";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { DeleteCategory, GetCategory } from "../../Services/category.service";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ViewCategory = () => {
  const [category, setCategory] = useState({
    content: [],
  });

  useEffect(() => {
    GetCategory()
      .then((data) => {
        console.log("Showing all category", data);
        setCategory(data);
      })
      .catch((error) => {
        toast.error("Something went Wrong");
        console.error(error);
      });
  }, []);

  const deleteCategoryMain = (categoryId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          DeleteCategory(categoryId).then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const newArray = category.content.filter((c) => {
              return c.categoryId != categoryId;
            });
            setCategory({
              ...category,
              content: newArray,
            });
          });
        }
      })
      .catch((error) => {
        console.error("Something went Wrong");
      });
  };

  const containerStyle = {
    overflowY: "scroll",
    maxHeight: "420px",
  };

  return (
    <>
      <ListGroup
        className="mb-2"
        style={{
          fontFamily: "poppins, sans-serif",
          fontSize: "17px",
          boxShadow: "0 5px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        <ListGroupItem>
          <h4 className="text-center">Our Top Categories</h4>
        </ListGroupItem>
      </ListGroup>
      <div style={containerStyle}>
        {category.content.map((category) => {
          return (
            <CategoryView
              deleteCat={deleteCategoryMain}
              category={category}
              key={category.categoryId}
            />
          );
        })}
      </div>
    </>
  );
};

export default ViewCategory;
