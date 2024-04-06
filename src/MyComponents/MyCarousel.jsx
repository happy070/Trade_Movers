import React, { useEffect, useState } from "react";
import { fetchAllImages } from "../Services/carousel.service";
import { Carousel } from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";
import "../../src/index.css";
import "../MyComponents/carousel.css";
const MyCarousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await fetchAllImages();
        console.log("Carousel images", images);
        setImages(images);
        setLoading(false); // Set loading to false once images are fetched
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchImages();
  }, []);

  // Function to get screen width
  const getScreenWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };

  // Calculate height and width based on screen width
  const calculateSize = () => {
    const screenWidth = getScreenWidth();
    if (screenWidth <= 768) {
      // Mobile screen
      return { height: 80, width: 80 };
    } else {
      // Desktop screen
      return { height: 300, width: 300 };
    }
  };

  // Calculate height based on screen width
  const calculateHeight = () => {
    const screenWidth = getScreenWidth();
    if (screenWidth <= 768) {
      // Mobile screen
      return "20vh";
    } else {
      // Desktop screen
      return "80vh";
    }
  };

  if (loading) {
    const { height, width } = calculateSize();
    const loaderContainerStyle = {
      height: calculateHeight(),
    };

    return (
      <div className="loader-container" style={loaderContainerStyle}>
        <ThreeDots
          visible={true}
          height={height}
          width={width}
          color="#3d63ae"
          radius={9}
          ariaLabel="three-dots-loading"
        />
      </div>
    );
  }

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
