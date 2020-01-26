import buildApi from "../api";
import { URLS } from "./config";

const createApi = () => {
  const { setBaseURL, get, post, delete: del, put } = buildApi();

  const urlBase = " http://localhost:3011/products/";

  setBaseURL(urlBase);

  const productService = {
    getProducts: (config = {}) => get(`${URLS.product.getProduct}`, {}, config),

    postProducts: (data, config = {}) =>
      post(`${URLS.product.postProduct}`, data, config),

    delProducts: (id, config = {}) =>
      del(`${URLS.product.delProduct}/${id}`, config),

    putProducts: (id, data, config = {}) =>
      put(`${URLS.product.putProduct}/${id}`, data, config)
  };

  return { productService };
};

export default createApi;
