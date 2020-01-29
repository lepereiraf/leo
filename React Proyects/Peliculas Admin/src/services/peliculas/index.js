import buildApi from "../api";
import { URLS } from "./config";
//import config from "../config";

const createApi = () => {
  const { get, post, setBaseURL, delete: del, put } = buildApi();

  const urlBase = "http://localhost:3011/movies/";

  setBaseURL(urlBase);

  const moviesService = {
    getMovies: (config = {}) => get(`${URLS.movies.getMovie}`, config),
    postMovies: (data, config = {}) =>
      post(`${URLS.movies.postMovie}`, data, config),
    delMovies: (id, config = {}) =>
      del(`${URLS.movies.delMovie}/${id}`, id, config),
    putMovies: (id, data, config = {}) =>
      put(`${URLS.movies.editMovie}/${id}`, data, config)
  };

  return { moviesService };
};

export default createApi;
