import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { fetchAllTrending } from "../Services/TrendingProduct.service";
import { MagnifyingGlass } from "react-loader-spinner";

const MyTrending = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await fetchAllTrending();
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

  if (loading) {
    const { height, width } = calculateSize();
    const loaderContainerStyle = {
      height: calculateHeight(),
    };

    return (
      <div className="loader-container" style={loaderContainerStyle}>
        <MagnifyingGlass
          visible={true}
          height={height}
          width={width}
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );
  }

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
