export const BASE_URL = `https://apis.trademovers.co.in`;

export const getProductImage = (productId) => {
  return `${BASE_URL}/products/image/${productId}`;
};
