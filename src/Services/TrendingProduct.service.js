import { publicAxios } from "./axios.service";

export const uploadTrend = (imagesData) => {
  return publicAxios
    .post("/api/trendingImages/upload", imagesData)
    .then((response) => response.data);
};

export const fetchAllTrending = () => {
  return publicAxios
    .get("/api/trendingImages/getTrending")
    .then((response) => response.data);
};

export const deleteTrend = (id) => {
  return publicAxios
    .delete(`/api/trendingImages/delete/${id}`)
    .then((response) => response.data);
};
