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
