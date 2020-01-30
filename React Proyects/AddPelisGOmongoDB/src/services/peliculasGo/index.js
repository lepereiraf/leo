import buildApi from "../api";

import { URLS } from "./config";

const createApi = () => {
  const { setBaseURL, get, post } = buildApi();

  const urlBase = "http://localhost:3013/";

  setBaseURL(urlBase);

  const movieService = {
    getMovies: (config = {}) => get(`${URLS.movie.getMovie}`, {}, config),
    postMovies: (data, config = {}) =>
      post(`${URLS.movie.postMovie}`, data, config)
  };

  return { movieService };
};

export default createApi;
