import { IoMdReturnRight } from "react-icons/io";
import { publicAxios } from "./axios.service";

export const uploadImages = (imagesData) => {
  return publicAxios
    .post("/api/carouselImages/upload", imagesData)
    .then((response) => response.data);
};

export const fetchAllImages = () => {
  return publicAxios
    .get("/api/carouselImages/getCarousels")
    .then((response) => response.data);
};

export const deleteImage = (id) => {
  return publicAxios
    .delete(`/api/carouselImages/delete/${id}`)
    .then((response) => response.data);
};
