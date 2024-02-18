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
