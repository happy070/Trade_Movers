import React, { useEffect, useState } from "react";

import { fetchAllImages } from "../Services/carousel.service";
import "../../src/index.css";
import { Carousel } from "react-bootstrap";
const MyCarousel = () => {
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

  return (
    <Carousel variant="dark" interval={1000}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`data:image/jpeg;base64,${image.data}`}
            alt="img not found"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
