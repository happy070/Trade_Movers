import { publicAxios } from "./axios.service";

export const GetOrder = () => {
  return publicAxios
    .get(`/api/quick-enquiries/getOrders`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
