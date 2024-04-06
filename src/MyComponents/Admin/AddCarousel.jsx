import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
} from "react-bootstrap";
import { uploadImages } from "../../Services/carousel.service";
import { toast } from "react-toastify";

const AddCarousel = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const filteredFiles = selectedFiles.filter(
      (file) => file.type === "image/png" || file.type === "image/jpeg"
    );

    setImages([
      ...images,
      ...filteredFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      })),
    ]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const resetImages = () => {
    setImages([]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const imagesData = new FormData();
      images.forEach((image) => {
        imagesData.append("files", image.file);
      });
      const response = await uploadImages(imagesData);
      console.log("Images uploaded successfully:", response);
      toast.success("Images uploaded successfully");
    } catch (error) {
      console.error("Failed to upload images:", error);
      toast.error("Failed to upload images");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Container className="text-center">
            <div>
              <h2>Add Carousels</h2>
            </div>
            <p className="text-muted mt-3">Image Preview</p>
            <div style={{ marginBottom: "5px" }}>
              {images.map((image, index) => (
                <div key={index} className="d-inline-block me-2">
                  <img
                    style={{ maxHeight: "100px" }}
                    className="img-fluid"
                    src={image.preview}
                    alt=""
                  />
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveImage(index)}
                    style={{ marginLeft: "5px" }}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </Container>
          <FormLabel>Select Carousel Images</FormLabel>
          <InputGroup>
            <FormControl type="file" onChange={handleFileChange} multiple />
          </InputGroup>
          <FormLabel className="text-muted">
            Only jpg/png files are supported
          </FormLabel>
        </FormGroup>
        <div className="mt-2 text-center">
          <Button type="submit" className="me-2" variant="success">
            Add Images to Carousel
          </Button>
          <Button variant="danger" onClick={resetImages} type="reset">
            Clear
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddCarousel;
