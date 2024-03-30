export const BASE_URL = `http://194.31.53.191:9090`;

export const getProductImage = (productId) => {
  return `${BASE_URL}/products/image/${productId}`;
};
