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
//get all categories
export const getCategories = (currentPage = 0, pageSize = 10) => {
  return publicAxios
    .get(`/categories?pageNumber=${currentPage}&&pageSize=${pageSize}`)
    .then((response) => response.data);
};
// get products of category
export const getProductsOfCategories = (
  categoryId,
  pageNumber = 0,
  pageSize = 10,
  sortBy = "addedDate",
  sortDir = "asc"
) => {
  return publicAxios
    .get(
      `/categories/${categoryId}/products?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`
    )
    .then((response) => response.data);
};
