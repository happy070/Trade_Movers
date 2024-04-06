import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import { toast } from "react-toastify";
import {
  AddProductToDB,
  addProductImage,
  createProductInCategory,
} from "../../Services/product.service";
import { getCategories } from "../../Services/category.service";
import { Editor } from "@tinymce/tinymce-react";
const AddProduct = () => {
  const [categories, setCategories] = useState(undefined);
  const [selectedCategoryId, setSelectedCategoryId] = useState("none");

  const editorRef = useRef();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    discountedPrice: 0,
    quantity: 1,
    live: true,
    stock: true,
    image: undefined,
    imagePreview: undefined,
  });

  const handleChange = (event, property) => {
    if (property === "live" || property === "stock") {
      setProduct({
        ...product,
        [property]: event.target.checked,
      });
    } else {
      setProduct({
        ...product,
        [property]: event.target.value,
      });
    }
  };

  useEffect(() => {
    getCategories(0, 1000)
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in loading categories");
      });
  }, []);

  const handleFileChange = (event) => {
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type == "image/jpeg"
    ) {
      //preview show
      const reader = new FileReader();
      reader.onload = (r) => {
        setProduct({
          ...product,
          imagePreview: r.target.result,
          image: event.target.files[0],
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      toast.error("Invalid File !!");
      setProduct({
        ...product,
        imagePreview: undefined,
        image: undefined,
      });
    }
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (selectedCategoryId === "none") {
      AddProductToDB(product)
        .then((responseData) => {
          console.log(responseData);
          // APi call
          addProductImage(product.image, responseData.productId)
            .then((data1) => {
              console.log(data1);
              toast.success("Image Uploaded");
            })
            .catch((error) => {
              console.log(error);
            });

          toast.success("Data Sent Successfully");
          Reset();
        })
        .catch((error) => {
          console.error("Something went Wrong");
          console.log(error);
        });
    } else {
      createProductInCategory(product, selectedCategoryId)
        .then((responseData) => {
          console.log(responseData);
          // APi call
          addProductImage(product.image, responseData.productId)
            .then((data1) => {
              console.log(data1);
              toast.success("Image Uploaded");
            })
            .catch((error) => {
              console.log(error);
            });

          toast.success("Data Sent Successfully");
          Reset();
        })
        .catch((error) => {
          console.error("Something went Wrong");
          console.log(error);
        });
    }
  };
  const Reset = () => {
    setProduct({
      title: "",
      description: "",
      price: 0,
      discountedPrice: 0,
      quantity: 1,
      live: false,
      stock: true,
      image: undefined,
      imagePreview: undefined,
    });
  };
  const viewProduct = () => {
    return (
      <>
        <div>
          <Card>
            <CardBody>
              <Form onSubmit={HandleSubmit}>
                <FormGroup>
                  <FormLabel>
                    <i>Product Title</i>
                  </FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter product Title"
                    onChange={(event) => handleChange(event, "title")}
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <FormLabel>
                    <i>Product Description</i>
                  </FormLabel>
                  <Editor
                    apiKey="k8ipw6twc8rl8ys8utvczi1nx4jov23k7plqrcj38hv3v1f7"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    init={{
                      height: 320,
                      menubar: true,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                    onEditorChange={() =>
                      setProduct({
                        ...product,
                        description: editorRef.current.getContent(),
                      })
                    }
                  />
                </FormGroup>
                {/* <FormGroup className="mt-2">
                  <Row>
                    <Col>
                      <FormLabel>
                        <i>Price</i>
                      </FormLabel>
                      <FormControl
                        type="Number"
                        placeholder="Enter Price"
                        onChange={(event) => handleChange(event, "price")}
                      />
                    </Col>
                    <Col>
                      <FormLabel>
                        <i>Discounted Price</i>
                      </FormLabel>
                      <FormControl
                        type="Number"
                        placeholder="Enter Discounted Price"
                        onChange={(event) => {
                          handleChange(event, "discountedPrice");
                          // console.log(event.target.value > product.price);
                          // if (event.target.value > product.price) {
                          //   console.log(product.price);
                          //   console.log(event.target.value);
                          //   toast.error("Enter Correct value");
                          //   return;
                          // }
                        }}
                      />
                    </Col>
                  </Row>
                </FormGroup> */}
                <Form.Group className="mt-3">
                  <Form.Label>Select Category</Form.Label>
                  <Form.Select
                    onChange={(event) =>
                      setSelectedCategoryId(event.target.value)
                    }
                  >
                    <option value="none">None</option>
                    {categories ? (
                      <>
                        {categories.content.map((cat) => (
                          <option key={cat.categoryId} value={cat.categoryId}>
                            {cat.title}
                          </option>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </Form.Select>
                </Form.Group>
                {/* <FormGroup className="mt-2">
                  <FormLabel>
                    <i>Product Quantity</i>
                  </FormLabel>
                  <FormControl
                    type="Number"
                    placeholder="Enter Your Quantity"
                    onChange={(event) => handleChange(event, "quantity")}
                  />
                </FormGroup> */}
                {/* <Row className="mt-2">
                  <Col>
                    <FormCheck
                      type="switch"
                      label={"live"}
                      checked={product.live}
                      onChange={(event) => handleChange(event, "live")}
                    />
                  </Col>
                  <Col>
                    <FormCheck
                      type="switch"
                      label={"stock"}
                      checked={product.stock}
                      onChange={(event) => handleChange(event, "stock")}
                    />
                  </Col>
                </Row> */}
                <FormGroup>
                  <Container className="text-center">
                    <p className="text-muted mt-3">Image Preview</p>
                    <img
                      style={{ maxHeight: "250px" }}
                      className="img-fluid"
                      src={product.imagePreview}
                      alt=""
                    />
                  </Container>
                  <FormLabel>Select Product Image</FormLabel>
                  <InputGroup>
                    <FormControl
                      type="File"
                      onChange={(event) => handleFileChange(event)}
                    />
                    <Button
                      onClick={() => {
                        setProduct({
                          ...product,
                          image: null,
                          imagePreview: undefined,
                        });
                      }}
                      variant="secondary"
                    >
                      clear
                    </Button>
                  </InputGroup>
                  <FormLabel className="text-muted">
                    Only jpg/png files are supported
                  </FormLabel>
                </FormGroup>
                <div className="mt-2 text-center">
                  <Button type="submit" className="me-2" variant="success">
                    Add Product
                  </Button>
                  <Button variant="danger" onClick={Reset} type="reset">
                    Clear
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </>
    );
  };

  return <div>{viewProduct()}</div>;
};

export default AddProduct;
