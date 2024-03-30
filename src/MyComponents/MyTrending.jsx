import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { fetchAllTrending } from "../Services/TrendingProduct.service";

const MyTrending = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await fetchAllTrending();
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
          <a href="#quickEnquiry">
            {" "}
            {/* Link to Quick Enquiry form */}
            <img
              className="d-block w-100"
              src={`data:image/jpeg;base64,${image.data}`}
              alt="img not found"
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyTrending;
