import { publicAxios } from "./axios.service";

// Adding category to database
export const Category = (category) => {
  return publicAxios
    .post("/categories", category)
    .then((response) => response.data);
};

// Getting categories from database
export const GetCategory = () => {
  return publicAxios.get("/categories").then((response) => response.data);
};

// Deleting the category from the List
export const DeleteCategory = (categoryId) => {
  return publicAxios
    .delete(`/categories/${categoryId}`)
    .then((response) => response.data);
};
