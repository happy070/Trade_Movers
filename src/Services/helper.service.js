export const BASE_URL = `http://localhost:9090`;

export const getProductImage = (productId) => {
  return `${BASE_URL}/products/image/${productId}`;
};
