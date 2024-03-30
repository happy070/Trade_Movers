import { publicAxios } from "./axios.service";

export const registerUser = (userData) => {
  return publicAxios.post("/users", userData).then((response) => response.data);
};
export const loginUser = (loginData) => {
  return publicAxios
    .post("/auth/login", loginData)
    .then((response) => response.data);
};
export const QuickEnquiry = (formdata) => {
  return publicAxios.post("/api/quick-enquiries", formdata).then((response) => {
    response.data;
  });
};
export const MyOrders = (formdata) => {
  return publicAxios.post("/api/myorders/add", formdata).then((response) => {
    response.data;
  });
};

export const FetchAllOrders = () => {
  return publicAxios
    .get("/api/myorders/show")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};
