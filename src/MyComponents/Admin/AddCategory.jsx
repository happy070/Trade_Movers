import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { Category } from "../../Services/category.service";
import Swal from "sweetalert2";
const AddCategory = () => {
  const [category, setCategory] = useState({
    title: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (event, property) => {
    event.preventDefault();
    setCategory({
      ...category,
      [property]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(category);
    if (category.title === undefined || category.title.trim() === "") {
      toast.error("Category title required !!");
      return;
    }

    if (
      category.description === undefined ||
      category.description.trim() === ""
    ) {
      toast.error("Category Description required !!");
      return;
    }

    // call server api to app category
    Category(category)
      .then((data) => {
        //success
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Category Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
        setCategory({
          title: "",
          description: "",
          coverImage: "",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in adding category !! ");
      });
  };

  const clearForm = (event) => {
    event.preventDefault();
    setCategory({
      title: "",
      description: "",
      coverImage: "",
    });
  };

  return (
    <div>
      <Container>
        <Card>
          <CardBody>
            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                marginTop: "9px",
              }}
              className="text-center"
            >
              Add Your Category
              {JSON.stringify(category)}
            </h3>
            <Form onSubmit={handleFormSubmit}>
              <FormGroup>
                <FormLabel>
                  <i>Category Name</i>
                </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter Product Name"
                  style={{ border: "1px solid #000" }}
                  onChange={(event) => handleChange(event, "title")}
                  value={category.title}
                />
                <FormLabel style={{ marginTop: "15px" }}>
                  <i>Category Discription</i>
                </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter Product Discription"
                  style={{
                    border: "1px solid #000",
                    height: "80px",
                  }}
                  onChange={(event) => handleChange(event, "description")}
                  value={category.description}
                />
                <FormGroup className="mt-3">
                  <Form.Label>Category Cover Image Url</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter here"
                    onChange={(event) => handleChange(event, "coverImage")}
                    value={category.coverImage}
                  />
                </FormGroup>
              </FormGroup>
              <div className="text-center">
                <Button type="submit" variant="primary" style={{ margin: 10 }}>
                  Add
                </Button>
                <Button onClick={clearForm} type="reset" variant="danger">
                  Clear
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default AddCategory;
