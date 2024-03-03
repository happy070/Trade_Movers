import React, { useEffect, useState } from "react";
import { deleteImage, fetchAllImages } from "../../Services/carousel.service";
import { Button, Carousel } from "react-bootstrap";
import { toast } from "react-toastify";

const ShowCarousel = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await fetchAllImages();
        console.log("Carousel images", images);
        setImages(images);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchImages();
  }, []);

  const handleDeleteImage = async (id) => {
    console.log("helooooo deleted");
    try {
      await deleteImage(id);
      // Update images state after successful deletion
      setImages(images.filter((image) => image.id !== id));
      console.log("Image deleted successfully");
      toast.success("Image deleted Successfully");
    } catch (error) {
      // Handle error
      console.log("Error deleting image:", error);
      toast.error("Something went Wrong");
    }
  };
  return (
    <div>
      <Carousel variant="dark" className="text-center" interval={1000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`data:image/jpeg;base64,${image.data}`}
              alt="img not found"
            />
            <Button
              onClick={() => handleDeleteImage(image.id)}
              variant="danger"
              className="m-0"
            >
              Delete This Banner
            </Button>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="mt-5">
        <h2>Number of Banners on Main Screen : {images.length}</h2>
      </div>
    </div>
  );
};

export default ShowCarousel;
