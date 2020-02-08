import buildApi from '../api';

import { URLS } from './config';

console.log('estoy en services');

const createApi = () => {
  const { setBaseURL, get } = buildApi();
  const urlBase = 'http://localhost:8000/Api/';

  setBaseURL(urlBase);
  const ejercicio = {
    getEjercicio: (id, config = {}) =>
      get(`${URLS.ejercicio.getEjercicio}`, {}, config)
  };

  return { ejercicio };
};

export default createApi;
