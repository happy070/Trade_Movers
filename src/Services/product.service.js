import { publicAxios } from "./axios.service";

export const AddProductToDB = (product) => {
  return publicAxios.post(`/products`, product).then((respnose) => {
    return respnose.data;
  });
};
//create product with category
export const createProductInCategory = (product, categoryId) => {
  return publicAxios
    .post(`/categories/${categoryId}/products`, product)
    .then((response) => response.data);
};

//add product image
export const addProductImage = (file, productId) => {
  const formData = new FormData();
  formData.append("productImage", file);
  return publicAxios
    .post(`/products/image/${productId}`, formData)
    .then((response) => response.data);
};

// getting all product
export const getAllProducts = (
  pageNumber = 0,
  pageSize = 10,
  sortBy = "addedDate",
  sortDir = "asc"
) => {
  return publicAxios
    .get(
      `/products?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`
    )
    .then((response) => response.data);
};
//delete the product
export const deleteProduct = (productId) => {
  return publicAxios
    .delete(`/products/${productId}`)
    .then((response) => response.data);
};
