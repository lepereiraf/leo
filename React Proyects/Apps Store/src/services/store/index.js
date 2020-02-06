import buildApi from "../api";
import { URLS } from "./config";

const createApi = () => {
  const { setBaseURL, get, post, delete: del, put } = buildApi();

  const urlBase = "http://localhost:3011/apps/";

  setBaseURL(urlBase);

  const appService = {
    getApps: (config = {}) => get(`${URLS.apps.getApps}`, {}, config),
    postApps: (data, config = {}) => post(`${URLS.apps.postApp}`, data, config),
    getCategorys: (category, config = {}) =>
      get(`${URLS.apps.getOneApp}/${category}`, config),
    getNameApps: (name, data, config = {}) =>
      get(`${URLS.apps.getName}/${name}`, data, config),
    putApps: (name, data, config = {}) =>
      put(`${URLS.apps.putApp}/${name}`, data, config)
  };
  return { appService };
};

export default createApi;
