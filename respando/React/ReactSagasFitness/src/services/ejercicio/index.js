import buildApi from "../api";
import { URLS } from "./config";

const createApi = () => {
  const { setBaseURL, get, post } = buildApi();

  const urlBase = "http://localhost:8000/Api/";

  setBaseURL(urlBase);

  const ejercicioService = {
    getEjercicios: (id, config = {}) =>
      get(`${URLS.ejercicios.getEjercicios}`, {}, config),
    postEjercicio: (data, config = {}) =>
      post(`${URLS.ejercicios.postEjercicio}`, data, config)
  };

  console.log(URLS.ejercicios.getEjercicios);
  return { ejercicioService };
};

export default createApi;
